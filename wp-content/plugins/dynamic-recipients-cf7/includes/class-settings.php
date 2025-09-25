<?php
namespace CF7_Dynamic_Recipients;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Handles plugin settings
 */
class Settings {
    private const OPTION_KEY = 'cf7_dynamic_recipients_settings';
    private const RECIPIENT_LIMIT = 4;

    public function __construct() {
        add_action('admin_init', [$this, 'register_settings']);
    }

    public function init_settings(): void {
        if (false === get_option(self::OPTION_KEY)) {
            add_option(self::OPTION_KEY, []);
        }
    }

    public function register_settings(): void {
        register_setting(
            'cf7_dynamic_recipients_options',
            self::OPTION_KEY,
            [
                'type' => 'array',
                'sanitize_callback' => [$this, 'sanitize_settings'],
                'default' => []
            ]
        );
    }

    public function sanitize_settings($input): array {
        if (!is_array($input)) {
            return [];
        }

        $sanitized = [];
        foreach ($input as $value) {
            if (!is_array($value)) {
                continue;
            }

            $label = sanitize_text_field($value['label'] ?? '');
            $email = sanitize_email($value['email'] ?? '');

            if (!empty($label) && !empty($email)) {
                $sanitized[] = [
                    'label' => $label,
                    'email' => $email
                ];
            }
        }

        // Enforce recipient limit
        $sanitized = array_slice($sanitized, 0, self::RECIPIENT_LIMIT);

        return array_values($sanitized);
    }

    public function is_at_limit(): bool {
        $recipients = $this->get_recipients();
        return count($recipients) >= self::RECIPIENT_LIMIT;
    }

    public function get_limit(): int {
        return self::RECIPIENT_LIMIT;
    }

    // Existing methods remain the same
    public function get_recipients(): array {
        return get_option(self::OPTION_KEY, []);
    }

    public function get_recipient_by_index(int $index): ?array {
        $recipients = $this->get_recipients();
        return $recipients[$index] ?? null;
    }

    public function get_recipient_email_by_index(int $index): ?string {
        $recipient = $this->get_recipient_by_index($index);
        return $recipient ? $recipient['email'] : null;
    }

    public function update_recipients(array $recipients): bool {
        // Enforce limit before updating
        $recipients = array_slice($recipients, 0, self::RECIPIENT_LIMIT);
        return update_option(self::OPTION_KEY, $recipients);
    }

    public function delete_settings(): bool {
        return delete_option(self::OPTION_KEY);
    }
}
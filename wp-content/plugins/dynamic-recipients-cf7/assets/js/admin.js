jQuery(document).ready(function($){const RECIPIENT_LIMIT=4;let recipientCount=$('.recipient-row').length;$('#add-recipient').on('click',function(){if(recipientCount>=RECIPIENT_LIMIT){const modalHtml=`
                <div id="recipient-limit-modal" class="recipient-limit-modal">
                    <div class="recipient-limit-modal-content">
                        
                        <p style="max-width: 400px;font-style: italic;font-size: 140%;margin: 0 auto 3px;">Need more flexibility?</p>
                        <h2 style="margin-bottom: 0;">Unlock unlimited recipients and more</h2>
                        <ul class="upgrade" style="max-width: 400px;margin: 0 auto;">
                                    <li>
                                        <strong>Advanced Recipient Management</strong> – Create unlimited recipients with custom labels and email addresses                          
                                    </li>
                                     <li><strong>Unlimited Shortcode Groups</strong> – Generate unlimited shortcode groups for different forms or purposes</li>
                                      <li><strong>CF7 Tag Generator Integration</strong> – Built-in tag generators for easy form building inside Contact Form 7 forms</li>
                                       <li><strong>Custom Shortcodes</strong> – Create custom shortcode names for different recipient groups</li>
                                </ul>
                        <div class="recipient-limit-modal-buttons">
                            <a href="https://onlyplugins.com/product/dynamic-recipients-pro/" class="button button-primary" target="_blank">Upgrade to Pro</a>
                            <button type="button" class="button modal-close">No Thanks</button>
                        </div>
                    </div>
                </div>`;if(!$('#recipient-limit-modal').length){$('body').append(modalHtml)}
$('#recipient-limit-modal').show();return}
const newRow=$('<div>',{class:'recipient-row'});newRow.append($('<input>',{type:'text',name:`cf7_dynamic_recipients_settings[${recipientCount}][label]`,placeholder:'Label',required:!0}));newRow.append($('<input>',{type:'email',name:`cf7_dynamic_recipients_settings[${recipientCount}][email]`,placeholder:'Email',required:!0}));newRow.append($('<button>',{type:'button',class:'button remove-recipient',text:'Remove'}));$('#dynamic-recipients-container').append(newRow);recipientCount++;updateAddButtonState()});$(document).on('click','.remove-recipient',function(){$(this).closest('.recipient-row').remove();reindexRows();updateAddButtonState()});$(document).on('click','.modal-close',function(){$('#recipient-limit-modal').hide()});$(window).on('click',function(event){if($(event.target).hasClass('recipient-limit-modal')){$('#recipient-limit-modal').hide()}});function reindexRows(){$('.recipient-row').each(function(index){$(this).find('input').each(function(){const name=$(this).attr('name');const newName=name.replace(/\[\d+\]/,`[${index}]`);$(this).attr('name',newName)})});recipientCount=$('.recipient-row').length}
function updateAddButtonState(){const addButton=$('#add-recipient');if(recipientCount>=RECIPIENT_LIMIT){addButton.addClass('button-limited')}else{addButton.removeClass('button-limited')}}
updateAddButtonState();$('#dynamic-recipients-form').on('submit',function(e){const form=$(this);const submitButton=form.find(':submit');let isValid=!0;form.find('input[required]').each(function(){if(!$(this).val()){isValid=!1;$(this).addClass('error')}else{$(this).removeClass('error')}});if(!isValid){e.preventDefault();alert('Please fill in all required fields.');return}
if($('.recipient-row').length>RECIPIENT_LIMIT){e.preventDefault();alert(`Free version is limited to ${RECIPIENT_LIMIT} recipients. Please upgrade to premium for unlimited recipients.`);return}
form.addClass('loading');submitButton.prop('disabled',!0);setTimeout(function(){form.removeClass('loading');submitButton.prop('disabled',!1)},1000)})})
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
echo ini_get('open_basedir');
set_time_limit(60);

function showlist() {
    echo nl2br("1\n");
    $ret = shell_exec("ls -la");
    echo nl2br($ret);
    echo nl2br("2\n");
}

function rmdir2() {
    echo nl2br("1\n");
    $ret = shell_exec("rm -rf bk.1");
    echo nl2br($ret);
    echo nl2br("2\n");
}

function unzip2() {
    echo nl2br("1\n");
    $ret = shell_exec("unzip -o latest.zip");
    echo nl2br($ret);
    echo nl2br("2\n");
}

function zip2() {
    echo nl2br("1\n");
    $ret = shell_exec("zip -r biso.zip ./ -x biso.zip");
    // echo nl2br($ret);
    echo nl2br("2\n");
}

zip2();

?>

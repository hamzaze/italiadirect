<?php
require_once('config.php');
require_once(PATH_TO_CLASS1 . 'Settings.php');

header('Content-Type: application/json');
global $article_options;
$article_options['is-from-APP']=true;
if(isset($_POST['context'])){
    switch($_POST['context']){
        default:
            $content=array();
            $content['success']=3;
            $content['message']='<h3>This command can not be executed.</h3><p>"' . $_POST['context'] . '"</p><p>Make sure the procedure is programmed.</p>';
        break;
    }
}
echo json_encode($content);	
exit();
<?php
/**
 * Class Settings holds the upload settings
 *
 */
class Settings
{
    static $password = "mypassword";
    static $uploadFolder = "uploads/";
}
?>
//Has the user uploaded something?
if(isset($_FILES['file']))
{
$target_path = Settings::$uploadFolder;
$target_path = $target_path . time() . '_' . basename( $_FILES['file']['name']);
//Check the password to verify legal upload
if($_POST['password'] != Settings::$password)
{
    $message = "Invalid Password!";
}
else
{
        //Try to move the uploaded file into the designated folder
        if(move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
            $message = "The file ".  basename( $_FILES['file']['name']). 
            " has been uploaded";
        } else{
            $message = "There was an error uploading the file, please try again!";
        }
    }
}
if(strlen($message) > 0)
{
    $message = '<p class="error">' . $message . '</p>';
}
/** LIST UPLOADED FILES **/
$uploaded_files = "";
 
//Open directory for reading
$dh = opendir(Settings::$uploadFolder);

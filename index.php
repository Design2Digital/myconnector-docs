<?php
            // your api key
            $apiKey = 'xxxxxxxx-xxxx-4c52-xxxxx-d186xxx';
            //The url you wish to send the POST request to
            $url = 'http://localhost:3000/api/forms/workflow/someworkflowname';
            
            $postData;
            // echo $_SERVER["CONTENT_TYPE"];
            //The data you want to send via POST
            if($_SERVER["CONTENT_TYPE"] == 'application/json') {
                $postData = json_decode(file_get_contents('php://input'), true);
            }
            
            if ($_SERVER["CONTENT_TYPE"] == 'application/x-www-form-urlencoded') {
                $postData = $_POST;
            } else {
                echo "";
                die("Error: Unknown Content-Type");
            }

            // implement some other checks on the POST request

            //encode json for POST request
            $payload = json_encode($postData);
            //specify the auth header
            $auth_header = 'Authorization: '.$apiKey;

            //open connection
            $ch = curl_init();

            //set the url
            curl_setopt($ch,CURLOPT_URL, $url);
            // load the content-type and auth_header
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/json', $auth_header));
            //set method to post and set payload.
            curl_setopt($ch,CURLOPT_POST, true);
            curl_setopt($ch,CURLOPT_POSTFIELDS, $payload);

            //So that curl_exec returns the contents of the cURL; rather than echoing it
            curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 

            //execute post
            $result = curl_exec($ch);

            // do something with result, like redirect to annother page :)
            echo $result;

            //remember to close the connection too
            curl_close($ch)
 
?>
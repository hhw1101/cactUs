<?php
    
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
          
        function get_data() {
            $datae = array();
            $datae[] = array(
                'Name' => $_POST['name'],,
                "username" => $POST["inputUsername"],
                "first_name"=> $POST["inputFirstName"],
                "last_name"=> $POST["inputLastName"],
                "organisation" => $POST["inputOrgName"],
                "email": =>$POST["inputEmailAddress"],
                "location": =>$POST["inputEmailAddress"],
                "Phone" =>$POST["inputEmailAddress"],
                "Birthday"=>$POST["inputBirthday"],
            );
            return json_encode($datae);
        }
          
        $name = "profiles";
        $file_name = $name . '.json';
       
        if(file_put_contents(
            "$file_name", get_data())) {
                echo $file_name .' file updated';
            }
        else {
            echo 'There is some error';
        }
    }
?>
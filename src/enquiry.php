<?php
  header('Access-Control-Allow-Origin: *');
  
  $conn =new mysqli("localhost","root" ,"","loginform");

  if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();
  }else{
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];

    $sql ="insert into enquiry (name ,email,phone) values('$name' ,'$email' ,'$phone');";
    $res =mysqli_query($conn,$sql);

    if($res){
       echo "Seccess !";
    }else{
        echo "Error!";
    }
    $conn->close();
  }

?>
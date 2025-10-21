Module
Module is in itself a complete feature like for example of one module - User Authentication, it is a module because it can have userlogin, forgetpassword, signup, confirm email(these are small small components of User Authentication module).
So, we can think like module is a big functionality that have small small features
like 
one for User sign up
one for User Authentication
third for password reset etc.
Module can have Services(api call) and Pipes, these are helpers of above one module. 

Note- Module can not be reusable, if we make it reusable then wherever we will call it will call double times all services and others etc mentioned above.
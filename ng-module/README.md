Module
Module is in itself a complete feature like for example of one module - User Authentication, it is a module because it can have userlogin, forgetpassword, signup, confirm email(these are small small components of User Authentication module).
So, we can think like module is a big functionality that have small small features
like 
one for User sign up
one for User Authentication
third for password reset etc.
Module can have Services(api call) and Pipes, these are helpers of above one module. 

Note- Module can not be reusable, if we make it reusable then wherever we will call it will call double times all services and others etc mentioned above.


        <------In this project.----->
1. We have one shared Module.
@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule]
})
export class SharedModule {}
2. And above shared Module getiing imported in 2 modules (login.module.ts and dashboard.module.ts).

logine.module.ts
@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule, RouterModule.forChild(routes)]
})
export class LoginModule {}

dashboard.module.ts
@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, RouterModule.forChild(routes)]
})
export class DashboardModule {}

3. Shared Module is now used in app.module.ts

4. Routing to different components like for login/dashboard mentioned in app.routing.module.ts

5. app.routing.module.ts and shared moidule both will be mentioned in app.module.ts


import { Component, inject } from '@angular/core';
import { Ilogin } from '../../model/login';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: Ilogin = {
     "emailId": "",
    "password": ""
  }
  masterSrv = inject(MasterService);
  router = inject(Router)


  onLogin() {
    //debugger;
    this.masterSrv.login(this.loginObj).subscribe((res: any) => {
      console.log(res);
      
      // if(res){
      //   localStorage.setItem('ticket', JSON.stringify(res.data));
      //   this.router.navigateByUrl('dashboard')
      // }else{
      //   alert("sorry you recieve no respond")
      // }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from 'app/models/restaurant';
import { ToastrService } from "ngx-toastr";
import { DishInput } from 'app/models/dishInput';
import { RestaurantInput } from 'app/models/restaurantInput';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    restaurantarr: Restaurant[];
    showMessage: boolean;
    visitor: number=0;
     blocky: number=0;
    submitted: boolean;
  constructor(public http:HttpClient,private toastr: ToastrService){
      this.visitors();
  }
    
  visitors()
  {
    this.http.get("http://localhost:8000/api/restaurant").subscribe((result:Restaurant[]) => {  
        result.forEach(x => {  
          this.visitor=this.visitor+x.accessed;
            if(x.available!="True")
            {
                this.blocky++;
            }
   
          console.log(this.visitor+"Visitors");
        });});
  }
  
  
  
  kim:string="UPDATE DETAILS HERE";
  dishes:any;
  obj:any;
  obj2:any;
  kylie:string="Add Restaurant";
  ngOnInit(){
var img="assets/OMNI FOOD/rest1/";
    this.dishes = new Array(new DishInput("", "",img+"", 0,""),new DishInput("", "",img+""+".png.jpg", 0,""),new DishInput("", "",img+""+".png.jpg", 0,""),new DishInput("", "",img+""+".png.jpg", 0,""));
     this.obj = new RestaurantInput("","","","",0,"True",img+""+".png.jpg", this.dishes);
     this.obj2 = new Restaurant(0,"","","","",0,"True","assets/OMNI FOOD/rest2/r2d3.png.jpg", this.dishes);
    



        console.log("FETCHING FROM USER PROFILE");

        this.http.get("http://localhost:8000/api/restaurant").subscribe((result:Restaurant[]) => {
                console.log(result);
                this.restaurantarr = result;
              });
            }
            onSubmit() {
                this.submitted = true;
                this.http.post("http://localhost:8000/api/restaurant",this.obj,{observe : 'response'})
                      .subscribe(res => {
                            console.log(res)
                            if (res.status == 201) {
                                  this.showMessage = true;
                            }
                      });
                      this.kylie="ADDED SUCCESSFULLY!";
                      this.showNotification('bottom','right');
           
                    }
          onUpdate() {
            this.submitted = true;
            this.http.put("http://localhost:8000/api/updateRestaurant",this.obj2,{observe : 'response'})
                  .subscribe(res => {
                        console.log(res)
                        if (res.status == 201) {
                              this.showMessage = true;
                        }
                  });
                  this.kim="UPDATED SUCCESSFULLY!";
                  this.showNotification('bottom','right');
           
      }








            block(rest:Restaurant){
                // console.log(this.myForm.controls['name'])
                // console.log(name, salary);
                if(rest.available=="True") rest.available="False";
                else
                rest.available="True";
                console.log("In update "+rest.available);
                
                this.http.put("http://localhost:8000/api/updateRestaurant",rest,{observe : 'response'})
                .subscribe(res=>{
                  console.log(res)
                  if(res.status == 202){
                    this.showMessage = true;
                  }
                });
                this.showNotification('bottom','right');
                      }
              
               
        
            showNotification(from, align) {
              const color = Math.floor(Math.random() * 5 + 1);
          
              switch (color) {
                case 1:
                  this.toastr.info(
                  '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Food Arena<b> REFRESH NEEDED! To suit the stats</b></span>',
                    "",
                    {
                      timeOut: 4000,
                      closeButton: true,
                      enableHtml: true,
                      toastClass: "alert alert-info alert-with-icon",
                      positionClass: "toast-" + from + "-" + align
                    }
                  );
                  break;
                case 2:
                  this.toastr.success(
                    '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Hey HALT! <b>TRY REFRESHING!</b> - Maybe Somethings Wrong with network</span>',
                    "",
                    {
                      timeOut: 4000,
                      closeButton: true,
                      enableHtml: true,
                      toastClass: "alert alert-success alert-with-icon",
                      positionClass: "toast-" + from + "-" + align
                    }
                  );
                  break;
                case 3:
                  this.toastr.warning(
                  '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Food Fighter relax Too much toggling</b></span>',
                    "",
                    {
                      timeOut: 4000,
                      closeButton: true,
                      enableHtml: true,
                      toastClass: "alert alert-warning alert-with-icon",
                      positionClass: "toast-" + from + "-" + align
                    }
                  );
                  break;
                case 4:
                  this.toastr.error(
                  '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">OH!<b>Network issue</b>  Creates Lag in LIVE Updates Dear Food Spartan </span>',
                    "",
                    {
                      timeOut: 4000,
                      enableHtml: true,
                      closeButton: true,
                      toastClass: "alert alert-danger alert-with-icon",
                      positionClass: "toast-" + from + "-" + align
                    }
                  );
                  break;
                case 5:
                  this.toastr.show(
                  '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Relax <b>Food is Love</b> Sit back I ll do it</span>',
                    "",
                    {
                      timeOut: 4000,
                      closeButton: true,
                      enableHtml: true,
                      toastClass: "alert alert-primary alert-with-icon",
                      positionClass: "toast-" + from + "-" + align
                    }
                  );
                  break;
                default:
                  break;
              }
            }
          



    
        }

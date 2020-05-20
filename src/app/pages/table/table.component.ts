import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Restaurant } from 'app/models/restaurant';
import { Choice } from 'app/models/choice';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    restaurantarr: Restaurant[];
    orders: Choice[];
    constructor(public http:HttpClient,private toastr: ToastrService){
        this.visitors();
    }
      
    visitors()
    {this.http.get("http://localhost:8000/api/restaurant").subscribe((result:Restaurant[]) => {
        console.log(result);
        this.restaurantarr = result;
      });

      this.ordersfun();

    }
    ordersfun()
    {this.http.get("http://localhost:8000/api/order").subscribe((result:Choice[]) => {
        console.log(result);
        this.orders = result;
      });
    }

       
    
    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'ID', 'Name','Type','Location','Contact','Visitors'],
            dataRows: [
            
            ]
        };
        this.tableData2 = {
            headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
            dataRows: [
                ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
            ]
        };
    }
}

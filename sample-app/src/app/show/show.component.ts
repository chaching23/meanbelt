import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})


export class showComponent implements OnInit {
  showProd:any;
  err:any;
  likes:number = 0;
  isLiked: boolean = false;

  constructor(private _httpService: HttpService, private _route:Router, private _router:ActivatedRoute) { }

  ngOnInit() {
    this._router.params.subscribe(params => {
      console.log(params)
    this._httpService.getOne(params['id']).subscribe(data => {
      console.log(data)
    this.showProd = data['pets'];
        
      }) 
    })
  }

  onDelete(id) {
    
    this._httpService.delete(id).subscribe(data =>{
      this.ngOnInit();
      this._route.navigate(['/'])

    })
  }


  likeCount(id:string, likes: number) {

    this.likes = this.showProd.likes + 1
    this.isLiked = true;

    let observable = this._httpService.addLike(this.showProd._id,{likes:this.likes});
    observable.subscribe( data => {
      
      // this.likes = data;
      this.ngOnInit();

    })

    }
  



}




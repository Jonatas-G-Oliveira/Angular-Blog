import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  { CommonModule } from '@angular/common';
import { dataFake } from "../../data/dataFake"

@Component({
    selector: 'app-content',
    standalone: true,
    imports:[],
    templateUrl:'./conteudo.html' ,
    styleUrl: './conteudo.css'
})
    

export class ContentComponent {
    thumbnail:string = ""
    content_title:string = ""
    content_description:string = ""

    private id:string | null = "0"

    
    constructor(
        private route:ActivatedRoute
    ){}

    ngOnInit():void{
        this.route.paramMap.subscribe(value =>
            this.id = value.get("id")
        )
        this.setValuesToComponent(this.id)
    }

    setValuesToComponent(id:string | null ){
        const result = dataFake.filter(article => article.id == id)[0]

        this.content_title = result.title;
        this.content_description = result.description;
        this.thumbnail =  result.photo;
        
    }
}
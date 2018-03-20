import {Component} from '@angular/core';
import {FlipCardComponent} from './flip-card.component';

@Component({
    template: `
        <div class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators" *ngFor="let c of components">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active" *ngFor="let c of components">
                    <img class="d-block w-100" src="..." alt="First slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    `
})
export class CarouselComponent {

    components = [
        // GeneralRankingComponent,
        // DetailViewComponent,
        FlipCardComponent
    ];


}

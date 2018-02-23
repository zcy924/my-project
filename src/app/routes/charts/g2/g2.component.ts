// tslint:disable:member-ordering
import {Component} from '@angular/core';
import {ChartsService} from '../charts-service';

@Component({
    selector: 'app-g2',
    templateUrl: './g2.component.html'
})
export class G2Component {
    dataSet: any;

    constructor(private chartService: ChartsService) {

    }

    getData() {
        this.chartService.getData()
            .subscribe(data => {
                this.dataSet = data;
                console.log(data);
            });
    }
}

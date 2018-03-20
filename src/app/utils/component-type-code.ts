import {FlipCardComponent} from "../routes/screen/components/flip-card.component";
import {CarouselComponent} from "../routes/screen/components/carousel.component";
import {TurnOverComponent} from "../routes/screen/components/turn-over.component";
import {EchartsGraphComponent} from "../routes/screen/components/echarts-graph.component";
import {ViewInfoComponent} from '@shared/components/view/view-info.component';
import {ViewDetailComponent} from '@shared/components/view/view-detail.component';
import {ViewRankComponent} from '@shared/components/view/view-rank.component';


export const ComponentTypeCode: Map<string, any> = new Map<string, any>();

ComponentTypeCode.set('0', EchartsGraphComponent);
ComponentTypeCode.set('1', ViewInfoComponent);
ComponentTypeCode.set('2', ViewDetailComponent);
ComponentTypeCode.set('3', ViewRankComponent);

ComponentTypeCode.set('10', TurnOverComponent);
ComponentTypeCode.set('11', FlipCardComponent);
ComponentTypeCode.set('12', CarouselComponent);




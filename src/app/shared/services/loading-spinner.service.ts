import {Injectable} from "@angular/core";

@Injectable()
export class LoadingSpinnerService {

  private _selector = "preloader";
  private _element: HTMLElement;
  public loading: boolean;

  constructor() {
    this._element = document.getElementById(this._selector);
    this.loading = true;
  }

  public show(): void {
    this._element.style["display"] = "block";
    this.loading = true;
  }

  public hide(delay: number = 0): void {
    setTimeout(() => {
      this._element.style["display"] = "none";
      this.loading = false;
    }, delay);
  }

  isLoading(): boolean {
    return this.loading;
  }
}

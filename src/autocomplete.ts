import 'kendo-ui/js/kendo.autocomplete';

// tslint:disable-next-line:class-name
export class autocomplete {
  public datasource: any;

  constructor() {
    this.datasource = {
      transport: {
        read: {
          dataType: 'jsonp',
          url: 'https://demos.telerik.com/kendo-ui/service/Customers'
        }
      }
    };
  }
}

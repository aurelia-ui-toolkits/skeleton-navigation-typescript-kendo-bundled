import 'kendo-ui/js/kendo.all.min';

// tslint:disable-next-line:class-name
export class autocomplete {
  public datasource: any;

  constructor() {
    this.datasource = {
      transport: {
        read: {
          dataType: 'jsonp',
          url: '//demos.telerik.com/kendo-ui/service/Customers'
        }
      }
    };
  }
}

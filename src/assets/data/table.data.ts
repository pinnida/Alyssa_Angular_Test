export enum TemplateType {
  action = 'action',
  date = 'date',
  dateTime = 'dateTime',
  dateTime2 = 'dateTime2',
  dateYear = 'dateYear',
  time = 'time',
  boolean = 'boolean',
  checkbox = 'checkbox',
  integer = 'integer',
  decimal = 'decimal',
  decimal3 = 'decimal3',
  digit = 'digit',
  bankNo = 'bankNo',
  html = 'html',
  rowNo = 'rowNo',
  fullName = 'fullName',
  project = 'project',
  enum = 'enum',
  company = 'company',
  status = 'status',
  unit = 'unit',
  string = 'string',
}
export class columns {
  field?: any;
  header?: string;
  editable?: boolean;
  type?: TemplateType;
  template?: any;
  rowgroup?: boolean;
  width?: any;
  calign?: string;
}

export interface Sort {
  sortBy: any;
  asc: boolean;
}

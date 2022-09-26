class HoldAnything<TypeOfData> {
  constructor(public data: TypeOfData) {}
}

const holdString = new HoldAnything<string>('school');
holdString.data;

import Race from './Race';

export default class Dwarf extends Race {
  static instanceCounter = 0;

  private _maxLifePoints: number;
  
  constructor(
    name: string,
    dexterity:number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.instanceCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.instanceCounter;
  }
}
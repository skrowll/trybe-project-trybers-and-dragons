import Race from './Race';

export default class Orc extends Race {
  static instanceCounter = 0;

  private _maxLifePoints: number;

  constructor(
    name: string,
    dexterity:number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instanceCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.instanceCounter;
  }
}
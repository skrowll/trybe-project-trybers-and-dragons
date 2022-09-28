import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static instanceCounter = 0;

  private _energyType: EnergyType;
  
  constructor(
    name: string,
  ) {
    super(name);
    this._energyType = 'mana';
    Necromancer.instanceCounter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instanceCounter;
  }
}
import { Injectable } from '@angular/core';
import { Comparison } from '../data-structures/comparison';

@Injectable({
  providedIn: 'root'
})
export class ComparisonService {

  comparison: Comparison;

  constructor() { // Setup a new comparison, complete with an account id
    this.comparison = new Comparison();
  }

  public setAccount(accountId: number) {
    this.comparison.account = accountId;
  }


  public getComparison(): Comparison {
    return this.comparison;
  }

  public setSelectedInputSets(selected: number[]): void {
   this.comparison.inputSets = selected;
  }

  public getSelectedInputSets(): number[] {
    return this.comparison.inputSets;
  }

  public setSelectedProviders(selected: number[]): void {
   this.comparison.providers = selected;
  }

  public getSelectedProviders(): number[] {
    return this.comparison.providers;
  }

  public setSelectedSolutions(selected: number[]): void {
   this.comparison.solutions = selected;
  }

  public getSelectedSolutions(): number[] {
    return this.comparison.solutions;
  }

}

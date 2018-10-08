import { Injectable } from '@angular/core';
import { Comparison } from '../data-structures/comparison';

@Injectable({
  providedIn: 'root'
})
export class ComparisonService {

  comparison: Comparison;

  constructor() { // Setup a new comparison, complete with an account id
    this.comparison = new Comparison();
    this.comparison.providers = [];
    this.comparison.inputs = [];
    this.comparison.solutions = [];
  }

  public setAccount(accountId: number) {
    this.comparison.account = accountId;
  }


  public getComparison(): Comparison {
    return this.comparison;
  }


  public setSelectedInputs(selected: number[]): void {
   this.comparison.inputs = selected;
  }

  public getSelectedInputs(): number[] {
    return this.comparison.inputs;
  }

  public setSelectedProviders(selected: number[]): void {
   this.comparison.providers = selected;
  }



  public toggleInput(input: number): void {

    const index = this.comparison.inputs.indexOf(input,0);
    if (index > -1) {
      this.comparison.inputs.splice(index, 1);
    } else {
      this.comparison.inputs.push(input);
    }
    console.log(this.comparison.inputs);

  }

  public toggleSolution(solution: number): void {
    const index = this.comparison.solutions.indexOf(solution,0);
    if (index > -1) {
      this.comparison.solutions.splice(index, 1);
    } else {
      this.comparison.solutions.push(solution);
    }
    console.log(this.comparison.solutions);
  }




  public solutionIsSelected(provider: number): boolean {
    if (this.comparison.providers.indexOf(provider) === -1) {
      return false;
    }
    return true;
  }

  public inputIsSelected(input: number): boolean {
    if (this.comparison.inputs.indexOf(input) === -1) {
      return false;
    }
    return true;
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

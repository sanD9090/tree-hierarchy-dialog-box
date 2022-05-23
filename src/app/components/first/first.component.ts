
import {NestedTreeControl} from '@angular/cdk/tree';
import {Component,} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';





interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Antivirus',
    children: [{name: 'Norton'}, {name: 'McAfee'}, {name: 'AVG'}],
  },
  {
    name: 'FullStack',
    children: [
      {
        name: 'FrontEnd',
        children: [{name: 'Angular'}, {name: 'React'}],
      },
      {
        name: 'BackEnd',
        children: [{name: 'NodeJs'}, {name: 'ExpressJS'},{name: 'SpringBoot'}],
      },
    ],
  },
];

/**
 * @title Tree with nested nodes
 */
 @Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
 
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}

function openDialog() {
  throw new Error('Function not implemented.');
}


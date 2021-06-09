import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  data=[
    {name:"Dr. John Diago",specialist:"M.D. Medicine, Children Specialist",address:"Oakland, California", hospital:"Morristown Medical center", department:"online",prefered:true},
    {name:"Dr. Mary Com",specialist:"M.D. Medicine, Children Specialist",address:"Oakland, California", hospital:"Morristown Medical center", department:"Insurance",prefered:true},
    {name:"Dr. Krish Philips",specialist:"M.D. Medicine, Children Specialist",address:"Oakland, California", hospital:"Morristown Medical center", department:"online",prefered:false},
    {name:"Dr. John Diago",specialist:"M.D. Medicine, Children Specialist",address:"Oakland, California", hospital:"Morristown Medical center", department:"Insurance",prefered:true},
    {name:"Dr. Krish Philips",specialist:"M.D. Medicine, Children Specialist",address:"Oakland, California", hospital:"Morristown Medical center", department:"online",prefered:false},
    {name:"Dr. Krish Philips",specialist:"M.D. Medicine, Children Specialist",address:"Oakland, California", hospital:"Morristown Medical center", department:"online",prefered:true},
    {name:"Dr. Krish Philips",specialist:"M.D. Medicine, Children Specialist",address:"Oakland, California", hospital:"Morristown Medical center", department:"online",prefered:false},
  ];

  ngOnInit(): void {
  }

}

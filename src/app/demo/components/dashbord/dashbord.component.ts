import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {StatisticsService} from "../../service/statistics/statistics.service";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
    encapsulation:ViewEncapsulation.None
})
export class DashbordComponent implements  OnInit{
    //statistic varible
    count = 0;
    Orders = 0;
    Products=0;
    Category=5;
    // chart variable
    basicData: any;
    basicOptions: any;

    constructor(private statisticsService:StatisticsService) {
    }


    ngOnInit(): void {
        this.setDataChart()
        this.getNumberOfOrders();
        this.getNumberOfProducts();
    }
    getNumberOfOrders(){
        console.log()
        this.statisticsService.getNumberOfOrders().then((size)=>{
            this.Products=size;
        })
    }
    getNumberOfProducts(){
        console.log()
        this.statisticsService.getNumberOfProducts().then((size)=>{
            this.Orders=size;
        })
    }


    setDataChart(){
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.basicData = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Sales',
                    data: [540, 325, 702, 620],
                    backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                    borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                    borderWidth: 1
                }
            ]
        };

        this.basicOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }






}

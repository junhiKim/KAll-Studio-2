﻿#pragma strict

function Start () {

}

function Update () {
    if (gameObject.tag == "stage3_bg") {
 
        if (gameObject.transform.position.y > -0.8) {
 
            gameObject.transform.position.y -= 0.003 ;
 
        }
        else 
        {
            gameObject.transform.position.y = 5.0 ;
 
        }
    }

}
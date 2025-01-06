package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
)

func main() {
	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()
	r.Static("/public", "./public")

	r.GET("/favicon.ico", func(c *gin.Context) {
        c.File("./public/favicon.ico")
    })

    r.GET("/", func(c *gin.Context) {
        c.File("./public/index.html")
    })


	fmt.Println("Server is running on http://127.0.0.1:8081")
    r.Run(":8081")
}
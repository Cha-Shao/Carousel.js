# Carousel.js

因为没有喜欢的轮播所以就自己做了

# 如何使用

```html
<body>
    <div class="carouselContainer" c-point c-autoplay>
        <div class="carousel" carousel>
            <div class="carouselItem" c-item>
            </div>
            <div class="carouselItem" c-item>
            </div>
            <div class="carouselItem" c-item>
            </div>
        </div>
        <!-- 上下页可以放到别的地方 -->
        <div class="previous">
            <i class="iconfont icon-back carouselicons" onclick="carouselPrevious()"></i>
        </div>
        <div class="next">
            <i class="iconfont icon-next carouselicons" onclick="carouselNext()"></i>
        </div>
    </div>
    <script src="./js/Carousel.js"></script>
</body>

<style>
.carouselContainer{
    overflow: hidden;
    position: relative;
}
.carousel{
    transition: 1.2s ease;
    display: flex;
    height: 100%;
}
</style>
```
> css可改名

### 选项

#### `carouselContainer`

包裹轮播的容器
- `c-autoplay` 自动轮播, 默认7s | 更改请修改Carousel.js的`carouselTime`变量
- `c-point` 添加轮播小按钮
- `point-right` 将按钮放到右边

#### `previous`/`next`

上一页/下一页

#### `carousel`

进行轮播的模块

#### `c-item`

轮播页
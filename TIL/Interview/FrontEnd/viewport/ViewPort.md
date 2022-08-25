## ViewPort 뷰포트

# 뷰포트가 무엇일까?

*간단하게 뷰포트란 웹 페이지가 브라우저 화면상에서 실제로 표시되는 영역이다.*

뷰포트는 html에서 head 요소의 자식 요소인 meta 요소를 사용하여 설정할 수 있다. 아래는 현재 프로젝트에서 사용하고 있는 뷰포트 태그이다.

```html
<meta
 name="viewport"
 content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
 />
<meta> 는 뷰포트 요소로서 페이지의 크기 및 배율을 제어하는 방법에 대한 지침을 제공
```

initial-scale=1.0은 브라우저에 의해 페이지가 처음 로드될 때 초기 확대/축소 레벨을 설정
user-scalable=no 은 사용자가 크기를 조절하지 못하도록 설정
maximum-scale=1 은 사용자가 극단적으로 크기를 확대하지 못하도록 방지함
width=device-width 은 페이지의 너비를 설정하여 기기의 화면 너비를 따르도록 함


vh (Viewport Height)
1vh는 뷰포트의 높이의 1%와 같다.

vw (Viewport Width)
1vw는 뷰포트의 너비의 1%와 같다.

vmin (Viewport Minimum)
뷰포트의 높이와 너비중 작은 쪽의 치수를 기초로 한다. (너비가 더 작을 경우 1vmin은 1vw와 같다)

vmax (Viewport Maximum)
뷰포트의 높이와 너비중 큰 쪽의 치수를 기초로 한다. (높이가 더 클 경우 1vmax은 1vh와 같다)

언뜻보면 %와 다를 바 없어 보이지만 %는 부모 요소의 크기에 영향을 받는 반면 뷰포트를 사용하는 단위는 부모 요소의 크기에 영향을 받지 않기 때문에 주의해야한다

참고자료

https://velog.io/@cheal3/%EB%B0%98%EC%9D%91%ED%98%95-%EC%9B%B9%EA%B3%BC-%EB%B7%B0%ED%8F%AC%ED%8A%B8
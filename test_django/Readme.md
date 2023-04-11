# 유용한 vs 확장 프로그램 설치

https://axce.tistory.com/39

# 확장 프로그램에서 Python 설치

- Python
- Python for VSCode
- Python Extension Pack

# VScode 에서 Python 코드 실행 방법 (참고)

- 상단의 file > NewFile 클릭
- 파일명을 작성한 후 확장자를 .py로 저장
- 단축키 Ctrl + F5로 터미널을 실행하거나 F1을 눌러 검색창에 Select Interpreter를 선택해 Python을 실행
- Python 3.8.10 64-bit('djnagovenv':venv)

# 가상환경 만들기

1. 원하는 장소에 프로젝트 폴더 생성
2. 폴더 내에 아래와 같이 입력해 만든 폴더 내에 가상환경 폴더 생성

```
python -m venv djangovenv
```

3. 설치했다면 F1을 누르고 Select InterPreter를 입력 > Python: select Interpreter를 선택 > Python 3.8.10 64-bit('djnagovenv':venv)과 같은 형식 선택 > 선택 후 Ctrl+Shift+`를 눌러 새로운 터미널을 실행(혹은 단축키 Ctrl+`)를 눌러 터미널을 실행 > 우측 상단의 +모양 버튼을 눌러 터미널을 실행

- 기존에는 터미널이 (base)로 시작되었다면
- 가상환경에서는 만든 가상환경인 (djangovenv)(base)로 시작

4. 장고 설치

```
python -m pip install django
```

5. 장고 프로젝트 생성

```
mkdir FirstProject
ls > 입력해서 폴더 생성되었는지 확인
cd FirstProject
```

6. 프로젝트 생성

```
django-admin startproject firstproject
cd firstproject
```

7. makemigrations와 migrate를 입력해 프로젝트의 변동사항을 데이터베이스에 적용

1) migration 생성

```
python manage.py makemigrations
```

2. DB 변동사항 적용

```
python manage.py migrate
```

- No chages detected 외에 다른 것이 온다면 변경된 사항이 있어 적용한다는 의미

8. python manage.py runserver를 입력해 서버 실행

```
python manage.py runserver
```

9. Ctrl을 누른 상태로 http://127.0.0.1:8000을 누르거나 웹 브라우저 url에 입력하면 만든 화면이 나타나게 됩니다.

# 가상환경 설치 관련 참고

- https://axce.tistory.com/98
- https://webhotpy.tistory.com/13#

# 리액트 설치

- 이전 단계

```
django-admin-startproject firstproject
cd firstproject
```

- 리액트 설치
- 노드 버전 : 14.17.3

```
npm install -g create-react-app
create-react-app frontend
```

# Django App 생성

1. 장고앱 생성

- Django manage.py 파일이 있는 경로로 이동 후 아래 명령어 입력

```
python manage.py startapp api
```

2. Django와 React 연결에 필요한 PIP 패키지 설치

1) DRF 및 Django CROS 설치 및 설정하기

- Django -> React로 데이터 전달을 위한 DRF(Django REST Framework) API 설치

```
pip install django-rest-framework
```

- Django로 Rest Api를 만들었는데 React와 연결을 해야할 때 CROS 오류가 발생함으로 설치 및 설정이 꼭 필요

```
pip install django-cors-headers
```

설치가 완료되었으면 settings.py-tpl파일 아래와 같이 수정

```
INSTALLED_APPS = [
# 나머지 부분은 같습니다.
...
'rest_framework',
'corsheaders',
...
]

MIDDLEWARE = [
'corsheaders.middleware.CorsMiddleware',
# 맨 위에 추가해서 넣어주세요. 나머지는 같습니다.
]

CORS_ORIGIN_WHITELIST = [
    "http://localhost:3000",
    "http://127.0.0.1:8000",
]

CORS_ALLOW_CREDENTIALS = True

#script안에서의 리소스 요청을 허용할 도메인 추가
```

# 템플릿 변경하기

1. Django(React) Template 설정 및 사용하기

- 장고 템플릿을 더 이상 사용하지 않기 때문에 Django Setting.py 파일 내에 Static 경로를 변경하여야 함

```
import os
# 맨 위쪽에 입력

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, 'frontend', 'build'), # 경로 변경
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.message.context_processors.messages',
            ],
        }
    }
]

# 경로 추가
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'frontend', 'build', 'static'),
]
```

# 설정을 변경했으니 python manage.py runserver 명령어 실행

```
python manage.py runserver
```

- http://127.0.0.1:8000/ 접속
- 하지만, 아직 템플릿이 변경되지 않음

# Django React Template Build

- React 템플릿을 적용하기 위해서는 경로를 명령어로 다시 한 번 알려줘야 함
- django 내에 있는 manage.py와 urls.py 2개 파일 코드를 변경해야 함
  > manage.py

```
#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys

def main():
    os.environ.setdefault('DJANGO_SETTING_MODULE', 'djangoreact.settings')
    try:
        from django.core.managemnet import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc

    try:
        if sys.argv[2] == 'react':
            project_root = os.getcwd()
            os.chdir(os.path.join(project_root, "frontend"))
            os.system("npm run build")
            os.chdir(project_root)
            sys.argv.pop(2)
    except IndexError:
        execute_from_command_line(sys.argv)
    else:
        execute_from_command_line(sys.argv)

if __name__ == '__main__':
    main()
```

> urls.py

```
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/', include('api.urls)),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
]
```

# 템플릿 변경 확인

```
python manage.py runserver react
```

# 배포

- 개발할 때는 react로 개발하고
- 완료되서 배포할 때는 python managy.py runserver react로 빌드

# 참고

- https://this-programmer.tistory.com/135

# admin 경로로 접속하여도 react 화면만 나오는 현상 해결 방법

```
cd frontend
npm run build
cd ..
python manage.py runserver
```

http://localhost:8000/admin/
ㄴ 해당 페이지로 접속

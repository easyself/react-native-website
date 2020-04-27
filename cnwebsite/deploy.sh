#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 进入生成的文件夹
cd build/react-native

# deploy to coding
echo '.easyli.best' > CNAME  # 自定义域名

if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN 在 github仓库`Settings/Secrets`设置的私密环境变量
  codingUrl=git@e.coding.net:emu/rn.git
else
  codingUrl=https://ukvkkYTGki:${CODING_TOKEN}@e.coding.net/emu/rn.git
fi

git add -A
git commit -m "${msg}"
git push -f $codingUrl master # 推送到coding

# deploy to github
echo 'rn.easyli.best' > CNAME  # 自定义域名

cd - # 退回开始所在目录

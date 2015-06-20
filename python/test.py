#!/usr/bin/env python
# -*- coding:utf-8 -*-

#http://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html
#http://qiita.com/sotetsuk/items/3a5718bb1f945a383ceb

from pymongo import Connection
from sklearn import svm
from sklearn.externals import joblib
import sys


def toFloat(n):         # 10加算して返すだけの関数plus
	
	return float(n)

	#コネクション作成
con = Connection('localhost', 27017)

#コネクションからtestデータベースを取得
db = con.ml

#testデータベースからfooコレクションを取得
col = db.test

test = []

for data in col.find():
	test.append(map(float,data['data'].split(",")));

# 予測モデルを復元
clf = joblib.load('python/clfs/clf_multi.pkl') 

# 予測結果を出力
result = clf.predict(test)
#print(clf.predict(test))

print result[(len(result) - 1)].encode('utf-8')

"""
for data in hello:
	print data.encode('utf-8')
"""

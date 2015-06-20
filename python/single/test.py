#!/usr/bin/env python
# -*- coding:utf-8 -*-


#http://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html

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
clf = joblib.load('/vagrant/ml/python/clfs/clf.pkl') 

# 予測結果を出力
print(clf.predict(test))
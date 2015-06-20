#!/usr/bin/env python
# -*- coding:utf-8 -*-

from sklearn.datasets import load_digits
from sklearn.multiclass import OneVsRestClassifier
from sklearn.svm import SVC
from sklearn.cross_validation import train_test_split
from sklearn.metrics import accuracy_score

from pymongo import Connection
from sklearn.externals import joblib
import sys

def toFloat(n):         # 10加算して返すだけの関数plus
	
	return float(n)

	#コネクション作成
con = Connection('localhost', 27017)

#コネクションからtestデータベースを取得
db = con.ml

#testデータベースからfooコレクションを取得
col = db.tank

ans = 'A'

label = []
problem = []

#data
for data in col.find():
	problem.append(map(float,data['data'].split(",")));

#label
for data in col.find():
	label.append(data['answer']);

#print "---------- learning data -------------------"
#print problem
print "---------- learning labels ------------------"
print label

C = 1.
kernel = 'rbf'
gamma  = 0.01

estimator = SVC(C=C, kernel=kernel, gamma=gamma)
classifier1 = OneVsRestClassifier(estimator)
classifier1.fit(problem, label)

classifier2 = SVC(C=C, kernel=kernel,gamma=gamma)
classifier2.fit(problem, label)

#testデータベースからfooコレクションを取得
col = db.test

test = []

for data in col.find():
	test.append(map(float,data['data'].split(",")));

pred_y1 = classifier1.predict(test)
pred_y2 = classifier2.predict(test)

print 'one-against-rest:{:.5f}'.format(accuracy_score(test,pred_y1))
print 'one-against-one:{:.5f}'.format(accuracy_score(test,pred_y2))
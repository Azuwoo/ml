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

# 以下のように記載することも可能
# db = con['test']

#testデータベースからfooコレクションを取得
col = db.tank

# 以下のように記載することも可能
# col = db['foo']

# http://symfoware.blog68.fc2.com/blog-entry-302.html

"""
print "========find_one========"
print col.find_one()
"""

ans = 'A'

label = []
problem = []
test = []
answers = []
i = 0

#正解データ
for data in col.find({u'answer': ans}):
	problem.append(map(float,data['data'].split(",")));
	label.append(1);

#誤りデータ
for data in col.find({u'answer':{"$ne":ans}}):
	problem.append(map(float,data['data'].split(",")));
	label.append(0);

#print "---------- learning data -------------------"
#print problem
print "---------- learning labels ------------------"
print label

clf = svm.SVC(kernel='rbf')
print "---------- learning result ------------------"
print(clf.fit(problem, label))

joblib.dump(clf, '/vagrant/ml/python/clfs/clf.pkl');
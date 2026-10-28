---
id: ch01-dalembert-gauss
type: corollary
chapter: 1
title: "Théorème de d'Alembert–Gauss : $\C$ est algébriquement clos"
ref: Corollaire I.10.2
page: 26
importance: 3
depends: [ch01-liouville, ch01-stabilite-operations, ch01-polynomes-fractions-rationnelles]
tags: [dalembert-gauss, polynome, racine, algebriquement-clos, liouville]
---
## Intuition

> 💡 Un polynôme non constant $P$ « monte » à l'infini comme $|a_d||z|^d$. S'il ne s'annulait jamais, $1/P$ serait une fonction holomorphe sur tout $\C$ qui tend vers $0$ à l'infini : elle serait bornée, donc constante par Liouville ([[ch01-liouville]]) — absurde, puisque $P$ ne l'est pas.

Vocabulaire. Une **racine** (ou zéro) de $P\in\C[X]$ est un $z\in\C$ tel que $P(z)=0$. Un corps $K$ est **algébriquement clos** si tout polynôme non constant à coefficients dans $K$ a une racine dans $K$ ; c'est équivalent à : tout polynôme $P\in K[X]$ de degré $d\ge1$ se factorise en $P=c\prod_{j=1}^d(X-z_j)$ avec $c\in K^\times$ et $z_1,\dots,z_d\in K$ (produit de facteurs de degré $1$).

## Énoncé

**Corollaire (poly, Corollaire I.10.2 — Théorème de d'Alembert–Gauss (Argand, 1806), p. 26).** Tout polynôme non constant à coefficients complexes possède une racine dans $\C$. En d'autres termes, le corps $\C$ est algébriquement clos.

(Le poly laisse la preuve au lecteur : question 3 de l'Exercice I.10.3.)

## Hypothèses

### H1 — $P$ est non constant

**Rôle.** C'est ce qui donne $|P(z)|\to+\infty$ quand $|z|\to+\infty$, donc $1/P$ bornée ; et c'est ce qui rend absurde la conclusion « $1/P$ constante ».

**Si on la retire.** Le polynôme constant $P=1$ n'a aucune racine. (Le polynôme nul, constant lui aussi, s'annule partout.)

### H2 — coefficients (et racines cherchées) dans $\C$

**Rôle.** La preuve utilise l'holomorphie de $1/P$ sur $\C$ tout entier, donc des racines cherchées dans $\C$.

**Si on la retire.** Sur $\R$, le résultat est faux : $X^2+1\in\R[X]$ n'a pas de racine réelle ($x^2+1\ge1$). Il en a dans $\C$ ($\pm i$) : c'est $\R$ qui n'est pas algébriquement clos. De même $X^2-2$ n'a pas de racine dans $\Q$.

### H3 — $P$ est un **polynôme** (et non une fonction entière quelconque)

**Rôle.** La croissance $|P(z)|\ge\frac{|a_d|}2|z|^d$ pour $|z|$ grand assure que $1/P$ est bornée.

**Si on la retire.** $e^z$ est entière, non constante, et ne s'annule jamais ($|e^z|=e^{\Re z}>0$). L'argument échoue car $1/e^z=e^{-z}$ n'est pas bornée sur $\C$ ($e^{-x}\to+\infty$ quand $x\to-\infty$).

## Idée de la preuve

Par l'absurde : si $P$ ne s'annule pas, $1/P$ est entière ; elle tend vers $0$ à l'infini car $|P(z)|\ge\frac{|a_d|}2|z|^d$ pour $|z|$ grand, donc elle est bornée. Liouville : $1/P$ est constante, donc $P$ aussi — contradiction.

## Preuve

Soit $P(z)=\sum_{k=0}^da_kz^k$ avec $d\ge1$ et $a_d\neq0$. Supposons par l'absurde que $P(z)\neq0$ pour tout $z\in\C$.

**$1/P$ est entière.** $P$ est holomorphe sur $\C$ ([[ch01-polynomes-fractions-rationnelles]]) et ne s'annule pas, donc $g:=1/P$ est holomorphe sur $\C$ (stabilité par inverse, [[ch01-stabilite-operations]]).

**$1/P$ est bornée.** Posons $A=\sum_{k=0}^{d-1}|a_k|$. Pour $|z|\ge1$, on a $|z|^k\le|z|^{d-1}$ pour $k\le d-1$, donc
$$
|P(z)|\ge|a_d||z|^d-\sum_{k=0}^{d-1}|a_k||z|^k\ge|a_d||z|^d-A|z|^{d-1}=|z|^{d-1}\big(|a_d||z|-A\big).
$$
Pour $|z|\ge R_0:=\max\big(1,\frac{2A}{|a_d|}\big)$, on a $|a_d||z|-A\ge\frac{|a_d|}2|z|$, d'où $|P(z)|\ge\frac{|a_d|}2|z|^d\ge\frac{|a_d|}2$, et donc $|g(z)|\le\frac2{|a_d|}$. Sur le disque fermé $\bar D(0,R_0)$, compact, $g$ est continue donc bornée. Ainsi $g$ est bornée sur $\C$.

**Contradiction.** Par le théorème de Liouville ([[ch01-liouville]]), $g$ est constante, égale à une constante $c$, non nulle puisque $g=1/P$ ne s'annule pas. Donc $P=1/c$ est constant, ce qui contredit $d\ge1$. Ainsi $P$ a une racine dans $\C$. $\square$

**Conséquence (factorisation).** Si $P(z_1)=0$, la division euclidienne par $X-z_1$ donne $P=(X-z_1)Q$ avec $\deg Q=d-1$ ; par récurrence sur $d$, $P=a_d\prod_{j=1}^d(X-z_j)$ avec $z_1,\dots,z_d\in\C$ (non nécessairement distincts).

## Preuve à trous

Soit $P$ de degré $d\ge1$, de coefficient dominant $a_d\neq0$, et supposons que $P$ ne s'annule pas. Alors <trou indice="quelle fonction auxiliaire ?">$g=1/P$ est holomorphe sur $\C$ tout entier</trou>. Pour $|z|\ge R_0=\max(1,2A/|a_d|)$ où $A=\sum_{k<d}|a_k|$, on a <trou indice="inégalité triangulaire inversée">$|P(z)|\ge|z|^{d-1}(|a_d||z|-A)\ge\frac{|a_d|}2|z|^d$, donc $|g(z)|\le\frac2{|a_d|}$</trou> ; sur le compact $\bar D(0,R_0)$, $g$ est bornée par continuité. Donc $g$ est entière et bornée : <trou>par Liouville, $g$ est constante, donc $P=1/g$ est constant, contradiction avec $d\ge1$</trou>. $\square$

## Exemples

* **$z^n=w$.** Pour $w\in\C$ et $n\ge1$, le polynôme $X^n-w$ a une racine : tout complexe a une racine $n$-ième. (Ici on le savait déjà par la forme polaire : si $w=\rho e^{i\theta}$, $z=\rho^{1/n}e^{i\theta/n}$ convient.)
* **Polynômes réels.** Si $P\in\R[X]$ et $P(z)=0$, alors $P(\bar z)=\overline{P(z)}=0$ (coefficients réels). En groupant $(X-z)(X-\bar z)=X^2-2\Re(z)X+|z|^2$, on obtient que tout polynôme réel est produit de facteurs réels de degré $1$ ou $2$. Ex. : $X^4+1=(X^2-\sqrt2X+1)(X^2+\sqrt2X+1)$ (développer : $X^4+2X^2+1-2X^2=X^4+1$ ✓).
* **Une borne explicite.** Pour $P(z)=z^3-5z+1$ : $A=6$, $|a_d|=1$, $R_0=12$ ; toutes les racines vérifient $|z|<12$ (car pour $|z|\ge12$, $|P(z)|\ge\frac12|z|^3>0$). (On peut affiner, mais l'argument suffit pour localiser les racines dans un disque.)

## Pièges

* > ⚠️ Le raisonnement ne s'applique pas aux fonctions entières : $e^z$ n'a aucun zéro. La croissance **polynomiale** de $P$ est essentielle pour borner $1/P$.
* Bien justifier la bornitude de $1/P$ sur **tout** $\C$ : à l'infini (minoration de $|P|$) **et** sur le disque fermé restant (compacité + continuité, qui utilise l'absence de zéro).
* Le théorème donne l'**existence** d'une racine, pas une formule (pas de formule par radicaux en degré $\ge5$).
* Une autre preuve, qui compte en plus les racines, viendra du théorème de Rouché ([[ch02-dalembert-gauss-rouche]]).

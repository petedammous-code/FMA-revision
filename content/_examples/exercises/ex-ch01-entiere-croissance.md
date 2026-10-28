---
id: ex-ch01-entiere-croissance
type: exercise
chapters: [1]
title: Fonction entière à croissance contrôlée
source: "Classique (Stein–Shakarchi, ch. 2, ex. 1 adapté)"
difficulty: 1
time: 15
tools: [ch01-estimees-cauchy, ch01-liouville]
---
## Énoncé

Soit $f:\C\to\C$ une fonction holomorphe. On suppose qu'il existe des réels $a,b>0$ et un entier $m\in\N$ tels que
$$
|f(z)| \le a + b\,|z|^m \qquad (z\in\C).
$$
1. Montrer que $f^{(k)}(0) = 0$ pour tout $k > m$.
2. En déduire que $f$ est un polynôme de degré au plus $m$.
3. Que dire d'une fonction entière $f$ telle que $|f(z)|\le \sqrt{|z|}$ pour $|z|\ge 1$ ?

## Indices

### Indice 1
Une majoration de $|f^{(k)}(0)|$ par le sup de $|f|$ sur un grand cercle : quel résultat du cours ?

### Indice 2
Estimées de Cauchy sur $\bar D(0,R)$ : $|f^{(k)}(0)|\le k!\,R^{-k}\sup_{C(0,R)}|f|\le k!\,(a+bR^m)/R^k$. Que se passe-t-il quand $R\to+\infty$ si $k>m$ ?

### Indice 3
Pour la question 3, une croissance en $|z|^{1/2}$ est « plus petite que $|z|^1$ » : appliquer les questions précédentes avec $m=1$ puis regarder le coefficient de $z$.

## Corrigé

**1.** Fixons $R>0$ et $k\in\N$. La fonction $f$ est holomorphe sur $\C\supset \bar D(0,R)$, donc les estimées de Cauchy ([[ch01-estimees-cauchy]]) donnent
$$
|f^{(k)}(0)| \le \frac{k!}{R^k}\sup_{|z|=R}|f(z)| \le \frac{k!\,(a+bR^m)}{R^k} = k!\left(\frac{a}{R^k}+\frac{b}{R^{k-m}}\right).
$$
Si $k>m$, le membre de droite tend vers $0$ quand $R\to+\infty$ ; le membre de gauche ne dépend pas de $R$, donc $f^{(k)}(0)=0$.

**2.** $f$ est holomorphe sur $\C$, donc analytique ([[ch01-holomorphe-analytique]]) : $f(z)=\sum_{k\ge0} \frac{f^{(k)}(0)}{k!}z^k$ pour tout $z\in\C$. D'après 1., la somme s'arrête à $k=m$ : $f$ est un polynôme de degré $\le m$.

**3.** Pour $|z|\ge1$, $|f(z)|\le |z|^{1/2}\le |z|$ ; pour $|z|\le 1$, $|f|$ est bornée par $M=\max_{\bar D(0,1)}|f|$ (continuité sur un compact). Donc $|f(z)|\le M+|z|$ sur $\C$ et, d'après 2., $f(z)=\alpha+\beta z$. Mais alors $|\beta| = \lim_{|z|\to\infty}|f(z)|/|z| \le \lim |z|^{-1/2}=0$ : $\beta=0$ et $f$ est constante, de module $\le \sqrt{|z|}$ pour tout $|z|\ge1$, donc $|f(0)|\le 1$ en faisant $|z|=1$. Réciproquement toute constante de module $\le1$ convient.

## Pièges et variantes

* Oublier que les estimées de Cauchy demandent l'holomorphie sur un voisinage du disque **fermé** : ici $\C$ convient.
* Variante : remplacer l'hypothèse par $|f(z)|\le a+b|z|^{m}$ seulement pour $|z|\ge R_0$ : la conclusion est la même (compacité sur $\bar D(0,R_0)$).
* Variante plus fine : si $|f(z)|\le C|z|^{m}$ pour $|z|\ge1$ avec $m\notin\N$, alors $f$ est un polynôme de degré $\le\lfloor m\rfloor$.

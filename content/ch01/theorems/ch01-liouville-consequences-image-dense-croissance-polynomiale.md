---
id: ch01-liouville-consequences-image-dense-croissance-polynomiale
type: proposition
chapter: 1
title: "Conséquences de Liouville et des estimées de Cauchy : image dense d'une fonction entière non constante ; croissance polynomiale $\Rightarrow$ polynôme"
ref: Exercice I.10.3
page: 26
importance: 2
depends: [ch01-liouville, ch01-estimees-cauchy, ch01-stabilite-operations]
tags: [liouville, entiere, image-dense, croissance-polynomiale, estimees-cauchy]
---
## Intuition

> 💡 Deux raffinements de Liouville ([[ch01-liouville]]), qui disent la même chose : une fonction **entière** (holomorphe sur tout $\C$) est très « rigide » à l'infini.

* **Image dense.** Une fonction entière non constante ne peut pas éviter tout un disque $D(w,\eps)$ : sinon $\frac1{h-w}$ serait entière et bornée par $\frac1\eps$. Son image passe aussi près qu'on veut de **tout** point de $\C$. (Le théorème de Picard, hors programme, dit bien plus : elle atteint tous les complexes sauf au plus un.)
* **Croissance polynomiale.** Les estimées de Cauchy ([[ch01-estimees-cauchy]]) majorent le $n$-ième coefficient de Taylor par $\frac{\sup_{C(0,R)}|f|}{R^n}$. Si $|f|$ croît au plus comme $|z|^m$, ce majorant tend vers $0$ pour $n>m$ : la série de Taylor s'arrête, $f$ est un polynôme.

Rappel : une partie $A\subset\C$ est **dense** si tout disque ouvert $D(w,\eps)$ ($\eps>0$) rencontre $A$.

## Énoncé

**Proposition (poly, Exercice I.10.3, questions 4 et 5, p. 26).**

1. Soit $h$ une fonction non constante, holomorphe sur $\C$. Alors $h(\C)$, l'image de $\C$ par $h$, est dense dans $\C$.
2. Soit $f$ une fonction holomorphe qui est définie sur $\C$. On suppose qu'il existe deux réels $a,b>0$ et un entier $m\in\N$ tels que
$$
|f(z)|\le a+b|z|^m\qquad\text{pour tout } z\in\C .
$$
Alors $f$ est un polynôme de degré $\le m$.

## Hypothèses

### H1 — $h$ (resp. $f$) holomorphe sur $\C$ **tout entier**

**Rôle.** Pour 1 : $\frac1{h-w}$ doit être holomorphe sur $\C$ pour appliquer Liouville. Pour 2 : on applique les estimées de Cauchy sur $C(0,R)$ pour tout $R>0$, et la série de Taylor en $0$ a un rayon infini.

**Si on la retire.** Pour 1 : $h(z)=z$ sur $D(0,1)$ est holomorphe non constante, d'image $D(0,1)$, non dense dans $\C$. Pour 2 : $f=\exp$ sur $D(0,1)$ vérifie $|f(z)|=e^{\Re z}\le e$, donc $|f|\le a+b|z|^0$ avec $a=e,b=1$ ; et $\frac1z$ sur $\{|z|>1\}$ est bornée par $1$ ; aucune n'est un polynôme.

### H2 — $h$ non constante (pour 1)

**Rôle.** C'est la contradiction finale : Liouville rend $h$ constante.

**Si on la retire.** $h\equiv c$ a pour image $\{c\}$, non dense.

### H3 — majoration $|f(z)|\le a+b|z|^m$ sur **tout** $\C$ (pour 2)

**Rôle.** Elle donne $\sup_{C(0,R)}|f|\le a+bR^m$ pour **tout** $R$, d'où les coefficients de Taylor d'indice $n>m$ nuls en faisant $R\to+\infty$.

**Si on la retire.** $e^z$ vérifie $|e^z|\le1$ sur le demi-plan $\{\Re z\le0\}$ mais n'est majorée par aucun $a+b|z|^m$ sur $\C$ (car $e^x/x^m\to+\infty$) ; elle n'est pas un polynôme. De même $\sin z$ (avec $|\sin(iy)|=|\sinh y|$ de croissance exponentielle).

## Idée de la preuve

1. Par l'absurde : si $h(\C)\cap D(w,\eps)=\emptyset$, alors $g=\frac1{h-w}$ est entière et $|g|\le\frac1\eps$ ; Liouville rend $g$, donc $h$, constante.
2. Estimées de Cauchy : $\frac{|f^{(n)}(0)|}{n!}\le\frac{a+bR^m}{R^n}\to0$ pour $n>m$ ; la série de Taylor (de rayon infini) est un polynôme de degré $\le m$.

## Preuve

**1. Image dense.** Supposons par l'absurde que $h(\C)$ ne soit pas dense : il existe $w\in\C$ et $\eps>0$ tels que $D(w,\eps)\cap h(\C)=\emptyset$, c'est-à-dire $|h(z)-w|\ge\eps$ pour tout $z\in\C$. La fonction $h-w$ est entière et ne s'annule pas, donc $g:=\frac1{h-w}$ est holomorphe sur $\C$ ([[ch01-stabilite-operations]]), et $|g(z)|\le\frac1\eps$ pour tout $z$. Par le théorème de Liouville ([[ch01-liouville]]), $g$ est constante, égale à une constante $c$, et $c\neq0$ car $g$ ne s'annule pas ($g\cdot(h-w)=1$). Donc $h=w+\frac1c$ est constante, ce qui contredit l'hypothèse. Ainsi $h(\C)$ est dense dans $\C$.

**2. Croissance polynomiale.** Comme $f$ est holomorphe sur $\C$, $\rho(0)=+\infty$ dans les estimées de Cauchy ([[ch01-estimees-cauchy]]) : pour tout $z\in\C$, $f(z)=\sum_{n\ge0}c_nz^n$ avec $c_n=\frac{f^{(n)}(0)}{n!}$, et, pour tout $R>0$,
$$
|c_n|\le\frac{\sup_{C(0,R)}|f|}{R^n}\le\frac{a+bR^m}{R^n}=\frac a{R^n}+\frac b{R^{n-m}} .
$$
Si $n>m$ (donc $n\ge1$ et $n-m\ge1$), le membre de droite tend vers $0$ quand $R\to+\infty$, et le membre de gauche ne dépend pas de $R$ : $c_n=0$. Par conséquent $f(z)=\sum_{n=0}^mc_nz^n$ pour tout $z\in\C$ : $f$ est un polynôme de degré $\le m$. $\square$

## Preuve à trous

**1.** Si $h(\C)$ n'est pas dense, il existe $w$ et $\eps>0$ avec <trou>$|h(z)-w|\ge\eps$ pour tout $z\in\C$</trou>. Alors <trou indice="quelle fonction auxiliaire rendre bornée ?">$g=\frac1{h-w}$ est entière et bornée par $\frac1\eps$</trou>, donc constante par Liouville, et $h=w+\frac1g$ est constante : contradiction.

**2.** Les estimées de Cauchy sur $C(0,R)$ donnent <trou indice="majorer le coefficient $c_n=f^{(n)}(0)/n!$">$|c_n|\le\frac{a+bR^m}{R^n}$</trou>. Pour $n>m$, <trou>ce majorant tend vers $0$ quand $R\to+\infty$, donc $c_n=0$</trou>. Comme $f$ est somme de sa série de Taylor en $0$ sur tout $\C$, $f(z)=\sum_{n\le m}c_nz^n$. $\square$

## Exemples

* **Fonction entière à valeurs dans un demi-plan.** Si $h$ est entière et $\Im(h(z))>0$ pour tout $z$, alors $h(\C)$ évite le disque $D(-i,1)$ (contenu dans $\{\Im<0\}$), donc n'est pas dense : $h$ est constante. Plus généralement, une fonction entière dont l'image évite un ouvert non vide est constante.
* **Croissance en $|z|^{3/2}$.** Si $f$ est entière et $|f(z)|\le1+|z|^{3/2}$, alors pour $|z|\ge1$, $|z|^{3/2}\le|z|^2$, donc $|f(z)|\le2+|z|^2$ sur $\C$ ; le point 2 donne $f$ polynôme de degré $\le2$. Mieux, directement par les estimées : $|c_2|\le\frac{1+R^{3/2}}{R^2}\to0$, donc $c_2=0$ : $f(z)=\alpha z+\beta$.
* **Images denses classiques.** $\exp(\C)=\C^\times$ ([[ch01-exp-image-c-etoile-log-local]]) est dense mais n'est pas $\C$ : la densité est optimale en ce sens qu'on ne peut pas remplacer « dense » par « égale à $\C$ ». En revanche $\sin(\C)=\C$ (pour tout $w$, l'équation $\sin z=w$ se ramène à $e^{2iz}-2iwe^{iz}-1=0$, équation du second degré en $e^{iz}$ dont les deux racines ont pour produit $-1$, donc sont non nulles, donc dans l'image de $\exp$).

## Pièges

* > ⚠️ La majoration polynomiale doit valoir sur **tout** $\C$ : une majoration sur un demi-plan ou un secteur ne suffit pas ($e^z$).
* Dans le point 2, la conclusion est « degré $\le m$ », pas « degré $=m$ » : $f=1$ vérifie $|f|\le1+|z|^5$.
* Pour la densité, la fonction auxiliaire est $\frac1{h-w}$ (et non $\frac1h$) : il faut centrer en le point $w$ évité, et vérifier qu'elle ne s'annule pas pour conclure que $h$ est constante.
* « Image dense » ne veut pas dire « surjective » : $\exp$ manque $0$.

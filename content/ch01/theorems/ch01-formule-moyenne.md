---
id: ch01-formule-moyenne
type: corollary
chapter: 1
title: "Formule de la moyenne : $f(z_0)=\frac1{2\pi}\int_0^{2\pi}f(z_0+re^{i\theta})\,d\theta$"
ref: Corollaire I.6.2
page: 19
importance: 3
depends: [ch01-cauchy-formule-disque, ch01-integrale-sur-cercle]
tags: [moyenne, cauchy, cercle, principe-du-maximum]
---
## Intuition

> 💡 Placez-vous au centre $z_0$ d'un disque fermé sur lequel $f$ est holomorphe, et faites la moyenne des valeurs de $f$ sur le cercle qui borde ce disque, chaque point du cercle comptant autant que les autres : vous retrouvez **exactement** $f(z_0)$, quel que soit le rayon.

C'est le cas particulier « $z$ = centre » de la formule intégrale de Cauchy ([[ch01-cauchy-formule-disque]]) : quand $z=z_0$, le poids $\frac{1}{2i\pi}\frac{d\omega}{\omega-z_0}$ devient le poids uniforme $\frac{d\theta}{2\pi}$. Conséquence immédiate : $|f(z_0)|$ ne peut pas dépasser le maximum de $|f|$ sur le cercle. C'est le germe du principe du maximum ([[ch01-principe-maximum]]) : une fonction holomorphe ne peut pas avoir de « bosse » isolée de module.

Ici $\sup_{C(z_0,r)}|f|$ désigne le sup de $|f|$ sur le cercle $C(z_0,r)$ ; c'est un max, $|f|$ étant continue sur ce compact.

## Énoncé

**Corollaire (poly, Corollaire I.6.2, p. 19) — Formule de la moyenne.** Sous les hypothèses du Théorème I.6.1 ($\Omega$ ouvert, $z_0\in\Omega$, $r>0$, $\bar D(z_0,r)\subset\Omega$, $f\in\Hol(\Omega)$), on a
$$
\text{(I.6.2)}\qquad f(z_0)=\frac{1}{2\pi}\int_0^{2\pi}f\bigl(z_0+re^{i\theta}\bigr)\,d\theta.
$$
Autrement dit, la valeur d'une fonction holomorphe au centre d'un disque est la moyenne de ses valeurs sur le bord de ce disque. En particulier $|f(z_0)|\le\sup_{C(z_0,r)}|f|$.

## Hypothèses

### H1 — $f$ holomorphe sur $\Omega$

**Rôle.** C'est l'hypothèse de la formule de Cauchy, appliquée au point $z=z_0$.

**Si on la retire.** $f(z)=|z|^2$ (de classe $C^\infty$ au sens réel, non holomorphe), $z_0=0$ : $\frac{1}{2\pi}\int_0^{2\pi}|re^{i\theta}|^2\,d\theta=r^2\neq0=f(0)$. Attention : la réciproque est fausse, la formule de la moyenne ne caractérise pas l'holomorphie. Par exemple $f(z)=\bar z$ la vérifie : $\frac1{2\pi}\int_0^{2\pi}(\bar z_0+re^{-i\theta})\,d\theta=\bar z_0$. Les fonctions continues qui vérifient la formule de la moyenne sur tous les cercles sont les fonctions **harmoniques** (chapitre IV, [[ch01-laplacien-harmonique]]).

### H2 — le disque fermé $\bar D(z_0,r)$ est inclus dans $\Omega$

**Rôle.** Elle permet d'appliquer la formule de Cauchy sur $C(z_0,r)$.

**Si on la retire.** $\Omega=\C^\times$, $f(z)=1/z$, $z_0=1$, $r=2$ : le cercle $C(1,2)$ est dans $\Omega$ mais $0\in\bar D(1,2)$. Avec $\omega=1+2e^{i\theta}$, $d\omega=2ie^{i\theta}d\theta$, $\omega-1=2e^{i\theta}$, la moyenne vaut
$$
\frac{1}{2\pi}\int_0^{2\pi}\frac{d\theta}{1+2e^{i\theta}}=\frac{1}{2i\pi}\int_{C(1,2)}\frac{d\omega}{\omega(\omega-1)}=\frac{1}{2i\pi}\int_{C(1,2)}\Bigl(\frac{1}{\omega-1}-\frac{1}{\omega}\Bigr)d\omega=1-1=0\neq f(1)=1,
$$
en utilisant $\frac1{2i\pi}\int_{C(1,2)}\frac{d\omega}{\omega-a}=1$ pour $a\in D(1,2)$ (formule de Cauchy pour la fonction constante $1$ sur $\C$), avec $a=1$ et $a=0$.

## Idée de la preuve

On fait $z=z_0$ dans la formule intégrale de Cauchy et l'on paramètre le cercle par $\omega=z_0+re^{i\theta}$ : $d\omega=ire^{i\theta}d\theta$ et $\omega-z_0=re^{i\theta}$ se simplifient. La majoration vient de $\bigl|\int\bigr|\le\int|\cdot|$.

## Preuve

Comme $z_0\in D(z_0,r)$, la formule intégrale de Cauchy ([[ch01-cauchy-formule-disque]]) s'applique au point $z=z_0$ :
$$
f(z_0)=\frac{1}{2i\pi}\int_{C(z_0,r)}\frac{f(\omega)}{\omega-z_0}\,d\omega .
$$
Paramétrons $\Gamma=C(z_0,r)$ par $\omega=z_0+re^{i\theta}$, $\theta\in[0,2\pi]$ ([[ch01-integrale-sur-cercle]]), de sorte que $d\omega=ire^{i\theta}d\theta$ et $\omega-z_0=re^{i\theta}$ :
$$
f(z_0)=\frac{1}{2i\pi}\int_0^{2\pi}\frac{f(z_0+re^{i\theta})}{re^{i\theta}}\,ire^{i\theta}\,d\theta=\frac{1}{2\pi}\int_0^{2\pi}f(z_0+re^{i\theta})\,d\theta .
$$
La majoration en découle : en notant $M:=\sup_{C(z_0,r)}|f|$,
$$
|f(z_0)|\le\frac{1}{2\pi}\int_0^{2\pi}\bigl|f(z_0+re^{i\theta})\bigr|\,d\theta\le\frac{1}{2\pi}\cdot2\pi M=M. \qquad\square
$$

## Preuve à trous

On applique la formule intégrale de Cauchy <trou indice="en quel point du disque ?">au point $z=z_0$, qui est bien dans le disque ouvert $D(z_0,r)$</trou> :
$f(z_0)=\frac{1}{2i\pi}\int_{C(z_0,r)}\frac{f(\omega)}{\omega-z_0}\,d\omega$. Avec $\omega=z_0+re^{i\theta}$, on a <trou indice="différentielle et dénominateur">$d\omega=ire^{i\theta}d\theta$ et $\omega-z_0=re^{i\theta}$</trou>, d'où
$$
f(z_0)=\frac{1}{2\pi}\int_0^{2\pi}f(z_0+re^{i\theta})\,d\theta .
$$
Enfin <trou indice="module d'une intégrale">$|f(z_0)|\le\frac1{2\pi}\int_0^{2\pi}|f(z_0+re^{i\theta})|\,d\theta\le\sup_{C(z_0,r)}|f|$</trou>. $\square$

## Exemples

* **Exponentielle.** Pour $f=\exp$, $z_0=0$, $r>0$ quelconque (ici $\Omega=\C$) : $\frac{1}{2\pi}\int_0^{2\pi}e^{re^{i\theta}}\,d\theta=1$. En prenant la partie réelle : $\int_0^{2\pi}e^{r\cos\theta}\cos(r\sin\theta)\,d\theta=2\pi$ pour tout $r$ (vérification directe : $e^{re^{i\theta}}=\sum_n\frac{r^n}{n!}e^{in\theta}$, normalement convergente, et seul $n=0$ a une moyenne non nulle).
* **Un polynôme.** $f(z)=z^2$ : $(z_0+re^{i\theta})^2=z_0^2+2z_0re^{i\theta}+r^2e^{2i\theta}$ ; les deux derniers termes sont de moyenne nulle, il reste $z_0^2=f(z_0)$. ✓
* **Parties réelles.** En prenant la partie réelle de (I.6.2), $u=\Re f$ vérifie aussi la formule de la moyenne : pour $u(x,y)=x^2-y^2=\Re(z^2)$ et $z_0=0$, $u(r\cos\theta,r\sin\theta)=r^2\cos2\theta$, de moyenne $0=u(0,0)$.

## Pièges

* > ⚠️ C'est une moyenne en $\theta$ avec le facteur $\frac1{2\pi}$ et **sans** $\frac{1}{\omega-z_0}$ : ne pas mélanger avec la forme $\frac{1}{2i\pi}\int\frac{f(\omega)}{\omega-z_0}\,d\omega$ (équivalente) ni écrire $\frac1{2\pi}\int_{C(z_0,r)}f(\omega)\,d\omega$ (qui vaut $0$ : c'est l'intégrale curviligne en $d\omega$, nulle car $f$ admet une primitive sur un disque ouvert contenant $\bar D(z_0,r)$, [[ch01-primitive-locale]] et [[ch01-integrale-primitive]] ; ce n'est pas une moyenne).
* La formule ne vaut qu'**au centre** du cercle ; en un autre point $z$ du disque, il faut le poids de Cauchy $\frac{1}{2i\pi}\frac{d\omega}{\omega-z}$, qui n'est pas uniforme.
* Vérifier $\bar D(z_0,r)\subset\Omega$ (disque **fermé**) avant d'appliquer.
* La formule de la moyenne ne caractérise pas les fonctions holomorphes ($\bar z$ la vérifie) : elle caractérise les fonctions harmoniques.

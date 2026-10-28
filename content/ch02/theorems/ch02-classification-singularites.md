---
id: ch02-classification-singularites
type: theorem
chapter: 2
title: Classification des singularités isolées ; singularité essentielle ; théorème de Casorati-Weierstrass
ref: Exercice II.7.4 (questions 5 à 8)
page: 50
importance: 2
depends: [ch02-singularite-effacable-riemann, ch02-laurent-developpement, ch02-pole-meromorphe-def, ch02-meromorphes-operations, ch01-def-multiplicite-zero, ch02-laurent-couronne-cauchy]
tags: [singularite isolee, singularite essentielle, pole, effacable, casorati-weierstrass, picard, laurent]
---
## Intuition

> 💡 Autour d'un point « troué » $0$, une fonction holomorphe $f$ ne peut avoir que **trois** comportements :
> * elle reste **bornée** : le trou est une illusion, on le bouche (singularité **effaçable**) ;
> * elle **explose** régulièrement, $|f|\to+\infty$, comme $1/z^m$ : c'est un **pôle** ;
> * ni l'un ni l'autre : c'est le chaos — près de $0$, $f$ prend des valeurs arbitrairement proches de **n'importe quel** nombre complexe (singularité **essentielle**, théorème de Casorati-Weierstrass).

Penser à $e^{1/z}$ : sur $\R_{>0}$ elle tend vers $+\infty$, sur $\R_{<0}$ vers $0$, sur $i\R$ elle reste de module $1$ ; au total elle atteint tout $w\neq0$ dans n'importe quel voisinage épointé de $0$.

Vocabulaire : $f$ est **méromorphe en $0$** si $0$ est une singularité effaçable ou un pôle, c'est-à-dire s'il existe $m\in\N$ tel que $z^mf(z)$ soit bornée près de $0$ ([[ch02-pole-meromorphe-def]]). Un **pôle** est un point où $f$ ne se prolonge pas holomorphiquement, mais où $z^mf$ est bornée pour un $m\ge1$. Le théorème de Riemann ([[ch02-singularite-effacable-riemann]]) dit : holomorphe et bornée sur un disque épointé $\Rightarrow$ prolongeable. Les coefficients de Laurent $a_n$ de $f$ sont définis dans [[ch02-laurent-couronne-cauchy]].

## Énoncé

**Théorème (poly, Exercice II.7.4, questions 5 à 8, p. 50-51).** Soit $f:D(0,1)\setminus\{0\}\to\C$ une fonction holomorphe.
5. $f$ possède un prolongement holomorphe dans $D(0,1)$ si et seulement si $|f(z)|$ reste borné quand $|z|$ tend vers $0$.
6. $f$ est méromorphe, non holomorphe, dans $D(0,1)$ (c'est-à-dire : $0$ est un pôle de $f$) si et seulement si $|f(z)|$ tend vers $+\infty$ quand $|z|$ tend vers $0$.
7. Soit $\eps>0$ (implicitement $\eps\le1$, pour que $D(0,\eps)\setminus\{0\}$ soit contenu dans le domaine de $f$). On suppose qu'il existe $a\in\C$ et $r>0$ tels que $D(a,r)$ n'intersecte pas l'image de $D(0,\eps)\setminus\{0\}$ par $f$. Alors la fonction $g$ définie sur $D(0,\eps)\setminus\{0\}$ par $g(z):=\dfrac{1}{f(z)-a}$ se prolonge en une fonction holomorphe en $0$.
8. **(Casorati-Weierstrass)** On suppose que $f$ n'est pas méromorphe en $0$ (on dit alors que $f$ admet une **singularité essentielle** en $0$). Alors, pour tout $\eps>0$, l'image de $D(0,\eps)\setminus\{0\}$ par $f$ est dense dans $\C$.

*Remarque du poly (admise).* Un théorème (difficile) de E. Picard dit que l'image de tout disque épointé $D(0,\eps)\setminus\{0\}$ par $f$ est soit $\C$ tout entier, soit $\C$ privé d'un seul point.

**Synthèse (trichotomie).** En notant $f(z)=\sum_{n\in\Z}a_nz^n$ le développement de Laurent de $f$ sur $D(0,1)\setminus\{0\}$, on a exactement l'un des trois cas :

| Type de $0$ | Comportement de $\lvert f\rvert$ | Coefficients de Laurent |
|---|---|---|
| effaçable | bornée près de $0$ | $a_n=0$ pour tout $n\le-1$ |
| pôle d'ordre $m\ge1$ | $\to+\infty$ | $a_{-m}\neq0$ et $a_n=0$ pour $n<-m$ |
| essentielle | ni bornée, ni $\to+\infty$ ; image de tout $D(0,\eps)\setminus\{0\}$ dense | $a_n\neq0$ pour une infinité de $n\le-1$ |

## Hypothèses

### H1 — $f$ holomorphe sur tout un disque épointé (singularité **isolée**)

**Rôle.** Tous les arguments (théorème de Riemann, développement de Laurent) se font sur un disque épointé où $f$ est holomorphe.

**Si on la retire.** $f(z)=\dfrac{1}{\sin(1/z)}$ est holomorphe sur $D(0,1)$ privé de $0$ et des points $\frac{1}{k\pi}$, $k\in\Z\setminus\{0\}$, qui sont des pôles s'accumulant en $0$ : $0$ n'est pas une singularité isolée, $f$ n'est holomorphe sur aucun disque épointé $D(0,\eps)\setminus\{0\}$, et la classification ne s'applique pas ($f$ n'est même pas méromorphe sur $D(0,1)$, l'ensemble de ses pôles n'étant pas localement fini).

### H2 — (question 7) le disque $D(a,r)$ évité par $f$ près de $0$

**Rôle.** Il donne $|f(z)-a|\ge r$, donc $g=\frac{1}{f-a}$ est holomorphe et bornée par $\frac1r$ sur le disque épointé, et Riemann s'applique.

**Si on la retire.** Pour $f(z)=e^{1/z}$ et $a=1$, $f-a$ s'annule aux points $z_k=\frac{1}{2ik\pi}$, $k\in\Z\setminus\{0\}$, qui tendent vers $0$ : $g=\frac{1}{f-1}$ n'est holomorphe sur aucun disque épointé de centre $0$ et ne se prolonge pas en $0$.

### H3 — (question 8) $f$ n'est pas méromorphe en $0$

**Rôle.** C'est l'hypothèse contredite à la fin de la preuve par l'absurde.

**Si on la retire.** Pour un pôle ou une singularité effaçable, l'image n'est en général pas dense : $f(z)=\frac1z$ envoie $D(0,\eps)\setminus\{0\}$ sur $\{|w|>\frac1\eps\}$ ; $f(z)=z$ l'envoie sur $D(0,\eps)\setminus\{0\}$. (D'après 5 et 6, l'image d'un petit disque épointé est bornée dans le premier cas, et évite un disque $D(0,R)$ dans le second.)

## Idée de la preuve

5 : Riemann. 6 : si $|f|\to\infty$, $1/f$ est bornée donc se prolonge avec un zéro d'ordre fini $m$ en $0$, d'où $f=z^{-m}/u$. 7 : $|g|\le1/r$ puis Riemann. 8 : sinon, par 7, $f=a+1/g$ avec $g$ holomorphe non identiquement nulle, donc $f$ serait méromorphe en $0$.

## Preuve

Notons $D_\eps^\times:=D(0,\eps)\setminus\{0\}$.

**5.** Si $|f|$ reste bornée quand $|z|\to0$, le théorème de Riemann ([[ch02-singularite-effacable-riemann]], forme « portée » : $f$ holomorphe sur $D(0,1)\setminus\{0\}$ et bornée près de $0$) donne un prolongement holomorphe. Réciproquement, si $F\in\Hol(D(0,1))$ prolonge $f$, $F$ est continue en $0$ donc bornée sur un voisinage de $0$, et $f$ aussi.

**6.** ($\Leftarrow$) Supposons $|f(z)|\to+\infty$ quand $z\to0$. Il existe $\eta\in]0,1[$ tel que $|f|\ge1$ sur $D_\eta^\times$ ; alors $1/f$ est holomorphe sur $D_\eta^\times$, bornée par $1$, et tend vers $0$ en $0$. Par Riemann elle se prolonge en $h\in\Hol(D(0,\eta))$ avec $h(0)=0$. Comme $h$ ne s'annule pas sur $D_\eta^\times$, $h\not\equiv0$ sur le connexe $D(0,\eta)$, donc le zéro $0$ est de multiplicité finie $m\ge1$ ([[ch01-def-multiplicite-zero]]) : $h(z)=z^mu(z)$, $u\in\Hol(D(0,\eta))$, $u(0)\neq0$, et $u$ ne s'annule pas sur $D(0,\eta)$. Ainsi, sur $D_\eta^\times$, $f(z)=z^{-m}\cdot\frac{1}{u(z)}$ avec $\frac1u$ holomorphe en $0$ et non nulle en $0$ : $z^mf$ est bornée près de $0$ et $f$ ne se prolonge pas holomorphiquement (elle n'est pas bornée). Donc $0$ est un pôle (d'ordre $m$) et $f$ est méromorphe, non holomorphe, sur $D(0,1)$ (avec $P=\{0\}$, localement fini).

($\Rightarrow$) Si $0$ est un pôle d'ordre $m\ge1$, par la Définition II.4.2 ([[ch02-pole-meromorphe-def]]), $f(z)=z^{-m}h(z)$ sur un disque épointé, avec $h$ holomorphe en $0$ et $h(0)\neq0$. Par continuité $|h|\ge|h(0)|/2$ près de $0$, donc $|f(z)|\ge\frac{|h(0)|}{2|z|^m}\to+\infty$.

**7.** Pour $z\in D_\eps^\times$, $f(z)\notin D(a,r)$, c'est-à-dire $|f(z)-a|\ge r>0$. Donc $g=\frac{1}{f-a}$ est holomorphe sur $D_\eps^\times$ et $|g|\le\frac1r$ : par Riemann, $g$ se prolonge en une fonction holomorphe $G$ sur $D(0,\eps)$.

**8.** Par l'absurde : supposons que pour un $\eps>0$ l'image $f(D_\eps^\times)$ ne soit pas dense. Il existe alors $a\in\C$ et $r>0$ avec $D(a,r)\cap f(D_\eps^\times)=\emptyset$. Par 7, $g=\frac{1}{f-a}$ se prolonge en $G\in\Hol(D(0,\eps))$, et $G$ n'est pas identiquement nulle ($G=\frac{1}{f-a}\neq0$ sur $D_\eps^\times$). Par la Proposition II.4.5 ([[ch02-meromorphes-operations]]), $\frac1G$ est méromorphe sur le connexe $D(0,\eps)$, donc $f=a+\frac1G$ aussi : $f$ est méromorphe en $0$, contradiction. Concrètement : si $G(0)\neq0$, $f=a+1/G$ est holomorphe près de $0$ ; si $G(0)=0$, $G=z^mu$ avec $m\ge1$, $u(0)\neq0$, et $z^mf=az^m+\frac1u$ est bornée près de $0$. Dans les deux cas $f$ est méromorphe en $0$.

**Synthèse.** Les cas « bornée » et « $\to+\infty$ » s'excluent, et une singularité essentielle n'est (par 5 et 6, qui caractérisent effaçable et pôle) ni bornée ni de module tendant vers $+\infty$. Pour les coefficients ([[ch02-laurent-couronne-cauchy]], avec unicité du développement) : si $0$ est effaçable, le prolongement est somme de sa série de Taylor, qui est donc le développement de Laurent, sans puissances négatives ; réciproquement, si $a_n=0$ pour $n\le-1$, $f$ est la somme d'une série entière convergeant sur $D_1^\times$, donc sur $D(0,1)$, qui la prolonge. Si $0$ est un pôle d'ordre $m$, $f=z^{-m}h$ avec $h=\sum_{k\ge0}c_kz^k$, $c_0=h(0)\neq0$, d'où $a_n=c_{n+m}$ : $a_{-m}\neq0$ et $a_n=0$ pour $n<-m$ (cf. [[ch02-laurent-developpement]]). Réciproquement, si $a_n=0$ pour $n<-m$, alors $z^mf=\sum_{n\ge-m}a_nz^{n+m}$ est une série entière, bornée près de $0$ : $f$ est méromorphe en $0$. Donc « essentielle » $\iff$ une infinité de $a_n\neq0$ avec $n\le-1$. $\square$

## Preuve à trous

**5.** C'est <trou indice="holomorphe + bornée sur un disque épointé">le théorème de Riemann (sens direct) et la continuité du prolongement en $0$ (réciproque)</trou>.

**6.** Si $|f|\to+\infty$, la fonction $1/f$ est holomorphe et bornée sur un petit disque épointé et tend vers $0$, donc <trou indice="Riemann, puis multiplicité d'un zéro">se prolonge en $h$ holomorphe avec un zéro d'ordre fini $m\ge1$ en $0$ : $h=z^mu$, $u(0)\neq0$</trou>, d'où $f=z^{-m}/u$ : pôle d'ordre $m$. Réciproquement $f=z^{-m}h$ avec $h(0)\neq0$ donne $|f|\ge\frac{|h(0)|}{2|z|^m}\to+\infty$.

**7.** L'hypothèse s'écrit <trou>$|f(z)-a|\ge r$ sur $D_\eps^\times$, donc $|g|\le1/r$</trou>, et Riemann prolonge $g$.

**8.** Si l'image n'était pas dense, il existerait $D(a,r)$ évité ; par 7, $g=\frac{1}{f-a}$ se prolonge en $G$ holomorphe, non identiquement nulle, et <trou indice="exprimer f à l'aide de G">$f=a+\frac1G$ serait méromorphe en $0$ (inverse d'une fonction holomorphe non nulle)</trou> : contradiction avec l'hypothèse de singularité essentielle. $\square$

## Exemples

* **$e^{1/z}$ : singularité essentielle.** Son développement $\sum_{k\ge0}\frac{z^{-k}}{k!}$ a une infinité de coefficients négatifs non nuls. Pour tout $w\neq0$ et tout $\eps>0$, $w$ est atteint dans $D_\eps^\times$ : si $L$ est un logarithme de $w$ ($e^{L}=w$), alors $z_k=\frac{1}{L+2ik\pi}$ vérifie $e^{1/z_k}=e^{L}=w$, et $|z_k|<\eps$ pour $|k|$ assez grand. La valeur $0$ n'est jamais atteinte : l'image est exactement $\C^\times$ (cas « $\C$ privé d'un point » de Picard).
* **$\sin(1/z)$ : l'image de tout disque épointé est $\C$.** Pour $c\in\C$, l'équation $\sin w=c$ s'écrit $u^2-2icu-1=0$ avec $u=e^{iw}$ ; le produit des racines vaut $-1$, donc il y a une racine $u\neq0$, et $w=-i\,L$ (où $e^{L}=u$) est solution. Les $w+2k\pi$ aussi, donc $z_k=\frac{1}{w+2k\pi}\in D_\eps^\times$ pour $|k|$ grand vérifie $\sin(1/z_k)=c$.
* **Diagnostic rapide.** $\frac{\sin z}{z}=\sum_{k\ge0}\frac{(-1)^kz^{2k}}{(2k+1)!}$ : effaçable (valeur $1$). $\frac{1-\cos z}{z^4}=\frac{1}{2z^2}-\frac{1}{24}+\cdots$ : pôle d'ordre $2$. $z\sin(1/z)=\sum_{k\ge0}\frac{(-1)^k}{(2k+1)!}z^{-2k}$ : essentielle.

## Pièges

* > ⚠️ « Non bornée » ne veut pas dire « pôle » : il faut $|f|\to+\infty$ (dans **toutes** les directions). $e^{1/z}$ n'est pas bornée mais tend vers $0$ le long de $\R_{<0}$.
* Casorati-Weierstrass donne la **densité** de l'image, pas la surjectivité ; c'est Picard (admis, hors programme) qui donne « $\C$ ou $\C$ privé d'un point ».
* Pour un pôle, l'ordre se lit sur la **plus négative** des puissances présentes dans le développement de Laurent ; pour une singularité essentielle, il n'y a pas de puissance « la plus négative ».
* La classification concerne une singularité **isolée** ; un point d'accumulation de pôles (comme $0$ pour $1/\sin(1/z)$) n'entre dans aucune des trois catégories.
* Une fonction méromorphe sur $\Omega$ n'a, par définition, **aucune** singularité essentielle dans $\Omega$ : $e^{1/z}$ n'est pas méromorphe sur $\C$ (mais l'est sur $\C^\times$, où elle est holomorphe).

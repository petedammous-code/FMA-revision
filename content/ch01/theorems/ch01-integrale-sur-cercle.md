---
id: ch01-integrale-sur-cercle
type: proposition
chapter: 1
title: "Intégrale sur le cercle : $\int_\gamma f(z)\,dz=ir\int_0^{2\pi}f(z_0+re^{it})e^{it}\,dt$"
ref: Exemple I.5.5
page: 16
importance: 2
depends: [ch01-def-integrale-chemin, ch01-cercle-sens-direct]
tags: [cercle, integrale-curviligne, parametrage, calcul]
---
## Intuition

> 💡 Sur le cercle $z=z_0+re^{it}$, le « petit pas » vaut $dz=ire^{it}\,dt$ : sa longueur est $r\,dt$ (longueur d'un petit arc d'angle $dt$) et sa direction est **tangente** au cercle ($i$ = rotation de $+90°$ du rayon). Intégrer sur le cercle revient donc à intégrer en l'angle $t$ de $0$ à $2\pi$, avec le facteur $ire^{it}$.

Cette formule transforme toute intégrale sur un cercle en une intégrale ordinaire sur $[0,2\pi]$ : c'est elle qu'on utilise pour démontrer la formule de Cauchy ([[ch01-cauchy-formule-disque]]), la formule de la moyenne ([[ch01-formule-moyenne]]) et les estimées de Cauchy ([[ch01-estimees-cauchy]]). Le lacet $\gamma$ et son sens de parcours sont décrits dans [[ch01-cercle-sens-direct]] ; l'intégrale le long d'un chemin dans [[ch01-def-integrale-chemin]].

## Énoncé

**Proposition (poly, Exemple I.5.5, p. 16).** Soient $z_0\in\C$, $r>0$ et $\gamma(t)=z_0+re^{it}$, $t\in[0,2\pi]$, le lacet qui décrit le cercle $C(z_0,r)$ dans le sens direct ([[ch01-cercle-sens-direct]]). Si $f$ est définie et continue sur un ouvert contenant ce cercle, nous avons
$$
\int_\gamma f(z)\,dz=i\,r\int_0^{2\pi}f(z_0+re^{it})\,e^{it}\,dt.
$$

Notation : on écrit souvent $\int_{C(z_0,r)}f(z)\,dz$ au lieu de $\int_\gamma f(z)\,dz$, en sous-entendant ce paramétrage (sens direct, un tour) : [[ch01-notation-integrale-sur-courbe]].

## Hypothèses

### H1 — $f$ continue sur un ouvert contenant le cercle $C(z_0,r)$

**Rôle.** C'est le cadre de la définition de $\int_\gamma f(z)\,dz$ ([[ch01-def-integrale-chemin]]) : $\gamma$ doit être un chemin de l'ouvert de définition de $f$, et $t\mapsto f(z_0+re^{it})e^{it}$ est alors continue sur $[0,2\pi]$, donc intégrable.

**Si on la retire.** Si $f$ a une singularité **sur** le cercle, l'intégrale peut ne pas exister. Exemple : $f(z)=\frac1{z-1}$ et le cercle $C(0,1)$ : l'intégrande $\frac{e^{it}}{e^{it}-1}$ a pour module $\frac1{2|\sin(t/2)|}$, qui n'est pas intégrable en $t=0$ (équivalent à $1/|t|$). En revanche les singularités **à l'intérieur** ou à l'extérieur du cercle ne gênent pas la définition (elles influent seulement sur la valeur : voir l'exemple de $\frac1{z-z_0}$ ci-dessous).

### H2 — le paramétrage est celui de l'exemple I.5.3

**Rôle.** La formule repose sur $\gamma'(t)=ire^{it}$ et sur l'intervalle $[0,2\pi]$ (un tour, sens direct).

**Si on la retire.** Pour le cercle parcouru dans le sens indirect, $t\mapsto z_0+re^{-it}$, on obtient $-ir\int_0^{2\pi}f(z_0+re^{-it})e^{-it}\,dt$, qui est l'**opposé** de $\int_\gamma f(z)\,dz$ ([[ch01-integrale-reparametrage-oppose-concatenation]]). Pour un paramétrage croissant quelconque du même tour (par exemple $s\mapsto z_0+re^{2is}$, $s\in[0,\pi]$), la valeur est la même.

## Idée de la preuve

On dérive le paramétrage : $\gamma'(t)=ire^{it}$, et on substitue dans la définition $\int_\gamma f(z)\,dz=\int_0^{2\pi}f(\gamma(t))\gamma'(t)\,dt$.

## Preuve

Le lacet $\gamma$ est de classe $C^1$ et, puisque $\frac{d}{dt}e^{it}=\frac{d}{dt}(\cos t+i\sin t)=-\sin t+i\cos t=ie^{it}$, on a $\gamma'(t)=ire^{it}$ pour tout $t\in[0,2\pi]$ ([[ch01-cercle-sens-direct]]). Comme $f$ est continue sur un ouvert $\Omega$ contenant $C(z_0,r)=\gamma([0,2\pi])$, $\gamma$ est un chemin de $\Omega$ et la définition ([[ch01-def-integrale-chemin]]) donne
$$
\int_\gamma f(z)\,dz=\int_0^{2\pi}f(\gamma(t))\,\gamma'(t)\,dt=\int_0^{2\pi}f(z_0+re^{it})\,ire^{it}\,dt=ir\int_0^{2\pi}f(z_0+re^{it})\,e^{it}\,dt,
$$
la constante $ir$ sortant de l'intégrale par $\C$-linéarité de l'intégrale (qui découle de la définition $\int g=\int\Re g+i\int\Im g$). $\square$

## Preuve à trous

La vitesse du lacet est $\gamma'(t)=$ <trou indice="dériver t ↦ e^{it}">$ire^{it}$, car $(e^{it})'=ie^{it}$</trou>. Comme $f$ est continue sur un ouvert contenant <trou>l'image $\gamma([0,2\pi])=C(z_0,r)$, $\gamma$ est un chemin du domaine de $f$</trou>, et par définition
$$
\int_\gamma f(z)\,dz=\int_0^{2\pi}f(\gamma(t))\gamma'(t)\,dt=ir\int_0^{2\pi}f(z_0+re^{it})e^{it}\,dt,
$$
en sortant la constante $ir$ par <trou indice="propriété de l'intégrale d'une fonction à valeurs complexes">$\C$-linéarité de l'intégrale</trou>. $\square$

## Exemples

* **Le calcul fondamental.** Pour $n\in\Z$, $f(z)=(z-z_0)^n$ est continue sur $\C\setminus\{z_0\}\supset C(z_0,r)$ et
$$
\int_{C(z_0,r)}(z-z_0)^n\,dz=ir\int_0^{2\pi}r^ne^{int}e^{it}\,dt=ir^{n+1}\int_0^{2\pi}e^{i(n+1)t}\,dt=\begin{cases}2i\pi&\text{si }n=-1,\\0&\text{si }n\neq-1.\end{cases}
$$
Le résultat pour $n=-1$ ne dépend **pas** du rayon $r$ : c'est le germe de la notion de résidu (chapitre II).
* **Une fonction non holomorphe.** $\int_{C(0,r)}\bar z\,dz=ir\int_0^{2\pi}re^{-it}e^{it}\,dt=2i\pi r^2$ (deux fois $i$ fois l'aire du disque).
* **$e^z/z$ sur le cercle unité.** $\int_{C(0,1)}\frac{e^z}{z}\,dz=i\int_0^{2\pi}\frac{e^{e^{it}}}{e^{it}}e^{it}\,dt=i\int_0^{2\pi}e^{e^{it}}\,dt$. Or $e^{e^{it}}=\sum_{n\ge0}\frac{e^{int}}{n!}$, série qui converge normalement sur $[0,2\pi]$ (terme général de module $1/n!$) : on peut intégrer terme à terme, et seul $n=0$ contribue, d'où $\int_{C(0,1)}\frac{e^z}{z}\,dz=2i\pi$. C'est le cas $z_0=0$, $f=\exp$ de la formule de Cauchy $2i\pi f(z_0)=\int_{C(z_0,r)}\frac{f(z)}{z-z_0}\,dz$ ([[ch01-cauchy-formule-disque]]).

## Pièges

* > ⚠️ Ne pas oublier le facteur $ire^{it}$ (venu de $dz=\gamma'(t)\,dt$) : $\int_{C(z_0,r)}f(z)\,dz\neq\int_0^{2\pi}f(z_0+re^{it})\,dt$. Par exemple $\int_{C(0,1)}\frac{dz}{z}=2i\pi$ alors que $\int_0^{2\pi}e^{-it}\,dt=0$.
* Le facteur est $r$ et non $r^2$ ou $2\pi r$ : c'est la longueur infinitésimale $|dz|=r\,dt$.
* Pour $f(z)=\frac{1}{z-z_0}$, l'intégrale vaut $2i\pi$ **quel que soit** $r>0$ ; mais pour $\frac{1}{z-a}$ avec $a\neq z_0$, le résultat dépend de la position de $a$ par rapport au cercle ($2i\pi$ si $|a-z_0|<r$, $0$ si $|a-z_0|>r$ : voir [[ch02-indice-cercle]]), et l'intégrale n'est pas définie si $|a-z_0|=r$.

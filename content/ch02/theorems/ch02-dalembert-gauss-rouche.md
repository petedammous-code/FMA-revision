---
id: ch02-dalembert-gauss-rouche
type: corollary
chapter: 2
title: Théorème fondamental de l'algèbre via Rouché
ref: non numéroté, section II.8, p. 54
page: 54
importance: 2
depends: [ch02-rouche]
tags: [dalembert-gauss, polynome, racines, rouche, localisation]
---
## Intuition

> 💡 Vu de très loin, un polynôme $P(z)=a_nz^n+\dots+a_0$ ressemble à son terme dominant $a_nz^n$ : sur un grand cercle $|z|=R$, les autres termes sont de taille $O(R^{n-1})$, négligeable devant $|a_n|R^n$. Le théorème de Rouché dit alors que $P$ a, dans le disque $D(0,R)$, autant de zéros que $a_nz^n$, c'est-à-dire $n$ (le zéro $0$ de multiplicité $n$).

On obtient d'un coup l'**existence** des racines (théorème de d'Alembert–Gauss : $\C$ est algébriquement clos), leur **nombre exact** ($n$, avec multiplicité) et une **localisation** (toutes dans $D(0,R)$, avec $R$ explicite). La première preuve du cours, par Liouville ([[ch01-dalembert-gauss]]), ne donnait que l'existence d'une racine.

Rappel : le théorème de Rouché ([[ch02-rouche]]) affirme que si $|f-g|<|g|$ sur le bord $\Gamma$ d'un ouvert $U$, alors $f$ et $g$ ont le même nombre de zéros moins de pôles dans $U$ ; pour des polynômes il n'y a pas de pôle.

## Énoncé

**Corollaire (poly, non numéroté, section II.8, p. 54).** Soit $P\in\C[X]$ un polynôme de degré $n\ge1$, de coefficient dominant $a_n$. On pose $f(z):=P(z)$ et $g(z):=a_nz^n$. Si $R>0$ est choisi assez grand, alors
$$
|f(z)-g(z)|<|g(z)|\qquad\text{sur } C(0,R),
$$
et le théorème de Rouché assure que $f$ et $g$ ont le même nombre de zéros (comptés avec multiplicité) dans $D(0,R)$ : **$P$ a exactement $n$ zéros dans $D(0,R)$**.

Précision quantitative (non écrite dans le poly) : on peut prendre tout $R>\max\Big(1,\ \dfrac{\sum_{k=0}^{n-1}|a_k|}{|a_n|}\Big)$. En particulier $P$ a au moins une racine complexe, et $P=a_n\prod_{j}(z-z_j)^{m_j}$ où les $z_j$ sont ses racines, de multiplicités $m_j$ avec $\sum_jm_j=n$.

## Hypothèses

### H1 — $\deg P=n\ge1$

**Rôle.** Elle garantit que $g(z)=a_nz^n$ (avec $a_n\neq0$) a exactement $n\ge1$ zéros dans $D(0,R)$ : le zéro $0$, de multiplicité $n$. C'est ce qui donne l'existence d'une racine.

**Si on la retire.** Pour $n=0$, $P=a_0\neq0$ : l'énoncé « $P$ a $n=0$ zéros » reste vrai (et la preuve aussi, avec $f-g=0$), mais il n'y a plus de racine à trouver. Pour $P=0$, aucun degré, aucun sens.

### H2 — $R$ assez grand

**Rôle.** L'inégalité $|P(z)-a_nz^n|<|a_n|R^n$ sur $|z|=R$ n'a lieu que si le terme dominant l'emporte, ce qui demande $R$ grand.

**Si on la retire.** $P(z)=z^2-4$, $g(z)=z^2$, $R=1$ : sur $C(0,1)$, $|P-g|=4>1=|g|$, l'inégalité est fausse, et en effet $P$ n'a aucun zéro dans $D(0,1)$ (ses racines sont $\pm2$), pas $2$. Avec $R=3$ : $4<9$, et les deux racines sont bien dans $D(0,3)$.

## Idée de la preuve

Sur $|z|=R$, $|P(z)-a_nz^n|\le\sum_{k<n}|a_k|R^k\le R^{n-1}\sum_{k<n}|a_k|$, qui est $<|a_n|R^n$ dès que $R$ est grand. Rouché dans $U=D(0,R)$ : $Z(P,U)=Z(a_nz^n,U)=n$.

## Preuve

Écrivons $P(z)=\sum_{k=0}^na_kz^k$ avec $a_n\neq0$, et soit $R>\max\big(1,\ A\big)$ où $A:=\frac{1}{|a_n|}\sum_{k=0}^{n-1}|a_k|$.

*L'inégalité sur le cercle.* Pour $|z|=R$, comme $R\ge1$ on a $R^k\le R^{n-1}$ pour $0\le k\le n-1$, donc
$$
|f(z)-g(z)|=\Big|\sum_{k=0}^{n-1}a_kz^k\Big|\le\sum_{k=0}^{n-1}|a_k|R^k\le R^{n-1}\sum_{k=0}^{n-1}|a_k|=|a_n|\,A\,R^{n-1}<|a_n|R^n=|g(z)| .
$$

*Rouché.* $f$ et $g$ sont des polynômes, donc holomorphes (en particulier méromorphes sans pôle) sur $\Omega=\C$, qui contient $\bar U$ pour $U=D(0,R)$. Le bord $\Gamma=C(0,R)$, parcouru dans le sens direct, est un lacet orienté positivement ; $f$ et $g$ n'y ont pas de pôle, et pas de zéro (conséquence de l'inégalité stricte). Le théorème de Rouché ([[ch02-rouche]], poly, Théorème II.8.4, p. 54) donne
$$
Z(P,D(0,R))-0=Z(a_nz^n,D(0,R))-0=n,
$$
car $g(z)=a_nz^n$ a pour seul zéro $0\in D(0,R)$, de multiplicité $n$. Donc $P$ a exactement $n$ zéros dans $D(0,R)$, comptés avec multiplicité.

*Compléments.* L'inégalité vaut aussi pour tout $R'\ge R$ ; donc $P$ ne s'annule pas pour $|z|\ge R$, et ses $n$ zéros dans $D(0,R)$ sont **tous** ses zéros. Notons-les $z_j$, de multiplicités $m_j$, $\sum_jm_j=n$. Pour chaque $j$, $(z-z_j)^{m_j}$ divise $P$ (la multiplicité analytique d'une racine d'un polynôme coïncide avec sa multiplicité algébrique : $P(z)=(z-z_j)^{m_j}h(z)$ avec $h$ polynomial, par division euclidienne itérée) ; les $(z-z_j)^{m_j}$ étant premiers entre eux, leur produit, de degré $n$, divise $P$, et $P=a_n\prod_j(z-z_j)^{m_j}$. $\square$

## Preuve à trous

Soit $R>\max(1,A)$ avec $A=\frac1{|a_n|}\sum_{k<n}|a_k|$. Pour $|z|=R$ : <trou indice="inégalité triangulaire puis R^k ≤ R^(n−1)">$|P(z)-a_nz^n|\le\sum_{k<n}|a_k|R^k\le|a_n|AR^{n-1}$</trou>, et cette quantité est <trou>$<|a_n|R^n=|a_nz^n|$ car $R>A$</trou>. On applique <trou indice="avec f = P, g = a_n z^n, U = D(0,R)">le théorème de Rouché sur $D(0,R)$ (fonctions holomorphes sur $\C$, sans pôle)</trou> : $Z(P,D(0,R))=Z(a_nz^n,D(0,R))=$ <trou>$n$, car $0$ est un zéro de multiplicité $n$ de $a_nz^n$</trou>. $\square$

## Exemples

* **Toutes les racines dans un disque explicite.** $P(z)=z^5+3z+1$ : $A=4$, donc les cinq racines sont dans $D(0,R)$ pour tout $R>4$. On fait mieux à la main : sur $|z|=2$, $|3z+1|\le7<32=|z^5|$, donc les cinq racines sont dans $D(0,2)$.
* **Combiner deux cercles.** Même $P$, sur $C(0,1)$ avec $g(z)=3z$ : $|P-g|=|z^5+1|\le2<3=|g|$, donc **une** racine dans $D(0,1)$, aucune sur $C(0,1)$. Par différence, quatre racines dans la couronne $\{1<|z|<2\}$. (La racine du disque unité est réelle : $P(-1)=-3<0<1=P(0)$ et TVI, d'où une racine dans $]-1,0[$.)
* **Dépendance des coefficients.** Le même argument montre que si $P_\eps(z)=z^n+\eps Q(z)$ avec $\deg Q<n$, toutes les racines de $P_\eps$ sont dans $D(0,1)$ dès que $|\eps|\sum|q_k|<1$ : sur $C(0,1)$, $|\eps Q(z)|\le|\eps|\sum|q_k|<1=|z^n|$.

## Pièges

* > ⚠️ Rouché compte les zéros **complexes** avec multiplicité : $z^2+1$ a deux zéros dans $D(0,2)$, aucun réel.
* Il faut choisir $R$ explicitement (ou au moins justifier « $R$ assez grand » : $\frac{|P(z)-a_nz^n|}{|a_nz^n|}\to0$ quand $|z|\to\infty$, uniformément sur les cercles) ; ne pas oublier la condition $R\ge1$ dans la majoration $R^k\le R^{n-1}$.
* Ce que donne Rouché : le **nombre** de zéros dans $D(0,R)$ ; la factorisation $P=a_n\prod(z-z_j)^{m_j}$ demande en plus que multiplicité analytique et algébrique coïncident (division euclidienne).
* Ne pas confondre avec la preuve par Liouville ([[ch01-dalembert-gauss]]), qui raisonne par l'absurde sur $1/P$ et ne donne qu'une racine à la fois (puis récurrence sur le degré).

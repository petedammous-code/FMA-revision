---
id: ch03-gamma-definition-prolongement
type: proposition
chapter: 3
title: "Fonction $\Gamma$ : définition, équation fonctionnelle, prolongement méromorphe"
ref: Exemple III.6.4
page: 71
importance: 2
depends: [ch01-fonction-gamma, ch01-holomorphie-sous-integrale, ch02-pole-meromorphe-def, ch02-residu-def, ch01-prolongement-analytique]
tags: [gamma, euler, prolongement-analytique, meromorphe, equation-fonctionnelle, residu]
---
## Intuition

> 💡 La fonction $\Gamma$ est **la** fonction qui interpole la factorielle : $\Gamma(n+1)=n!$. Elle est définie par une intégrale qui n'a de sens que pour $\Re(z)>0$, mais l'équation fonctionnelle $\Gamma(z+1)=z\,\Gamma(z)$, lue à l'envers comme $\Gamma(z)=\Gamma(z+1)/z$, permet de « reculer d'un cran vers la gauche » à chaque fois : on connaît $\Gamma$ sur $\{\Re(z)>0\}$, donc sur $\{\Re(z)>-1\}$ (sauf en $0$), donc sur $\{\Re(z)>-2\}$ (sauf en $0,-1$), etc.

Le prix à payer : chaque division par $z$, $z+1$, ... crée un **pôle simple** en $0,-1,-2,\dots$. On obtient une fonction **méromorphe** sur $\C$ (holomorphe sauf en des pôles isolés, [[ch02-pole-meromorphe-def]]) : c'est le **prolongement analytique** de $\Gamma$, unique d'après le principe du prolongement analytique ([[ch01-prolongement-analytique]]).

Notations : pour $t>0$ et $z\in\C$, $t^{z-1}:=e^{(z-1)\ln t}$, donc $|t^{z-1}|=t^{\Re(z)-1}$. On note $-\N=\{0,-1,-2,\dots\}$ ($\N$ contient $0$, comme dans le poly).

## Énoncé

**Proposition (poly, Exemple III.6.4, p. 71).** La fonction $\Gamma$ est définie, pour tout $z\in\C$ tel que $\Re(z)>0$, par
$$
\Gamma(z):=\int_0^\infty e^{-t}\,t^{z-1}\,dt .
$$
Elle est holomorphe sur le demi-plan $\{\Re(z)>0\}$, et
$$
\Gamma(z+1)=z\,\Gamma(z)\quad\text{pour tout }\Re(z)>0,\qquad\text{en particulier}\quad \Gamma(n+1)=n!\quad(n\in\N).
$$
Cette formule permet de définir $\Gamma$ comme une fonction méromorphe sur le demi-plan $\{\Re(z)>-1\}$ avec pour seul pôle $0$, puis, par une récurrence simple, comme fonction méromorphe sur $\C$ avec pour pôles les entiers négatifs ou nuls.

*Précisions (démontrées ci-dessous).* Ces pôles sont simples, et $\Res_{-m}(\Gamma)=\dfrac{(-1)^m}{m!}$ pour $m\in\N$ ; l'équation $\Gamma(z+1)=z\Gamma(z)$ reste vraie sur $\C\setminus(-\N)$.

## Hypothèses

### H1 — $\Re(z)>0$ pour la formule intégrale

**Rôle.** Elle rend l'intégrale absolument convergente en $0$ : $|e^{-t}t^{z-1}|=e^{-t}t^{\Re(z)-1}$, intégrable sur $]0,1]$ si et seulement si $\Re(z)>0$ (à l'infini, $e^{-t}t^{\Re(z)-1}\le C e^{-t/2}$ est toujours intégrable). Elle sert aussi à annuler le terme de bord en $0$ dans l'intégration par parties.

**Si on la retire.** Pour $\Re(z)=x\le0$, $e^{-t}t^{x-1}\ge e^{-1}t^{x-1}$ sur $]0,1]$ et $\int_0^1t^{x-1}dt=+\infty$ : la fonction n'est pas intégrable. Même comme intégrale impropre, ça diverge : pour $z=iy$, $y\ne0$, $\int_\eps^1t^{iy-1}dt=\frac{1-\eps^{iy}}{iy}$ n'a pas de limite quand $\eps\to0$ ($\eps^{iy}=e^{iy\ln\eps}$ tourne sur le cercle unité). La formule intégrale ne fournit donc **pas** $\Gamma$ à gauche : c'est l'équation fonctionnelle qui la prolonge (et la valeur $\Gamma(-\frac12)=-2\sqrt\pi$, par exemple, n'est pas une intégrale $\int_0^\infty e^{-t}t^{-3/2}dt=+\infty$).

### H2 — Prolongement par $\Gamma(z)=\Gamma(z+1)/z$

**Rôle.** Chaque application de cette formule étend le domaine d'une bande de largeur $1$ ; l'unicité du prolongement vient de la connexité de $\C\setminus(-\N)$ (principe du prolongement analytique) et de la compatibilité des définitions successives.

**Si on la retire.** On peut prolonger autrement (par le produit de Weierstraß, [[ch03-gamma-produit-weierstrass]], ou par la formule de Hankel), mais on obtient **la même** fonction : deux fonctions holomorphes sur l'ouvert connexe $\C\setminus(-\N)$ égales sur $\{\Re(z)>0\}$ sont égales ([[ch01-prolongement-analytique]]). Il n'y a donc pas d'autre « choix » ; ce qui serait faux, c'est de croire que $\Gamma$ se prolonge holomorphiquement à $\C$ tout entier : $|\Gamma(z)|\to+\infty$ quand $z\to0$, puisque $z\Gamma(z)=\Gamma(z+1)\to\Gamma(1)=1$.

## Idée de la preuve

Holomorphie : théorème d'holomorphie sous l'intégrale (domination sur les bandes $\alpha\le\Re(z)\le\beta$). Équation fonctionnelle : une intégration par parties. Prolongement : $\Gamma(z):=\dfrac{\Gamma(z+N)}{z(z+1)\cdots(z+N-1)}$ sur $\{\Re(z)>-N\}$, définitions compatibles, pôle simple en $-m$ car le numérateur vaut $\Gamma(1)=1\ne0$ et le dénominateur a un zéro simple.

## Preuve

*Holomorphie sur $\{\Re(z)>0\}$.* C'est l'Exemple I.9.2 ([[ch01-fonction-gamma]]) : $F(z,t)=t^{z-1}e^{-t}$ est holomorphe en $z$ pour tout $t>0$, et pour $0<\alpha\le\Re(z)\le\beta$, $|F(z,t)|\le(t^{\alpha-1}+t^{\beta-1})e^{-t}$, fonction intégrable sur $]0,+\infty[$ indépendante de $z$ ; le théorème d'holomorphie sous l'intégrale ([[ch01-holomorphie-sous-integrale]]) s'applique sur chaque bande, et tout point du demi-plan est intérieur à une telle bande. (Le poly signale la variante : $\Gamma$ est $C^1$ comme fonction de deux variables réelles et la dérivation sous l'intégrale montre $\frac{\partial\Gamma}{\partial\bar z}=0$.)

*Équation fonctionnelle.* Soient $\Re(z)=x>0$ et $0<\eps<A$. Comme $\frac{d}{dt}t^z=z\,t^{z-1}$ pour $t>0$, une intégration par parties donne
$$
\int_\eps^Ae^{-t}t^{z}\,dt=\Big[-e^{-t}t^z\Big]_\eps^A+z\int_\eps^Ae^{-t}t^{z-1}\,dt .
$$
Or $|e^{-A}A^z|=e^{-A}A^{x}\to0$ quand $A\to+\infty$ et $|e^{-\eps}\eps^z|\le\eps^{x}\to0$ quand $\eps\to0$ (c'est ici que sert $x>0$). Les deux intégrales convergent (absolument) vers $\Gamma(z+1)$ et $\Gamma(z)$, d'où $\Gamma(z+1)=z\Gamma(z)$. Comme $\Gamma(1)=\int_0^\infty e^{-t}dt=1$, une récurrence donne $\Gamma(n+1)=n\,\Gamma(n)=n\,(n-1)!=n!$.

*Prolongement.* Pour $N\in\N^\times$, posons $U_N=\{\Re(z)>-N\}$, $E_N=\{0,-1,\dots,-(N-1)\}$ et, pour $z\in U_N\setminus E_N$,
$$
\Gamma_N(z):=\frac{\Gamma(z+N)}{z(z+1)\cdots(z+N-1)} .
$$
C'est bien défini ($\Re(z+N)>0$ et le dénominateur ne s'annule qu'en $E_N$) et holomorphe sur $U_N\setminus E_N$ (composée et quotient de fonctions holomorphes).

* *Coïncidence avec $\Gamma$ pour $\Re(z)>0$* : en itérant l'équation fonctionnelle, $\Gamma(z+N)=(z+N-1)\Gamma(z+N-1)=\dots=(z+N-1)\cdots(z+1)z\,\Gamma(z)$, donc $\Gamma_N(z)=\Gamma(z)$.
* *Compatibilité* : pour $z\in U_N\setminus E_N$, on a $\Re(z+N)>0$, donc $\Gamma(z+N+1)=(z+N)\Gamma(z+N)$ et
$\Gamma_{N+1}(z)=\dfrac{(z+N)\Gamma(z+N)}{z\cdots(z+N-1)(z+N)}=\Gamma_N(z)$.

On définit donc sans ambiguïté $\Gamma(z):=\Gamma_N(z)$ pour tout $N$ tel que $\Re(z)>-N$, sur $\C\setminus(-\N)$ ; cette fonction est holomorphe (elle coïncide avec $\Gamma_N$ sur chaque ouvert $U_N\setminus E_N$) et prolonge l'intégrale. Pour $N=1$ : $\Gamma(z)=\Gamma(z+1)/z$ sur $\{\Re(z)>-1\}\setminus\{0\}$, d'où la première étape de l'énoncé.

*Les pôles.* Soit $m\in\N$ et $N=m+1$. Au voisinage de $-m$,
$$
\Gamma(z)=\frac{1}{z+m}\cdot\frac{\Gamma(z+m+1)}{z(z+1)\cdots(z+m-1)},
$$
où le second facteur est holomorphe près de $-m$ (car $\Re(-m+m+1)=1>0$ et $z(z+1)\cdots(z+m-1)$ ne s'annule pas en $-m$) et vaut en $-m$
$$
\frac{\Gamma(1)}{(-m)(-m+1)\cdots(-1)}=\frac{1}{(-1)^m\,m!}=\frac{(-1)^m}{m!}\ne0 .
$$
Donc $-m$ est un pôle simple ([[ch02-pole-meromorphe-def]]), de résidu $\Res_{-m}(\Gamma)=\frac{(-1)^m}{m!}$ ([[ch02-residu-def]]). L'ensemble $-\N$ est fermé et discret : $\Gamma$ est méromorphe sur $\C$, de pôles exactement les entiers négatifs ou nuls.

*Équation fonctionnelle prolongée.* Si $z\in\C\setminus(-\N)$, alors $z+1\notin-\N$ et, avec $N$ tel que $\Re(z)>-N$ : $z\,\Gamma_{N+1}(z)=\dfrac{\Gamma(z+1+N)}{(z+1)\cdots(z+N)}=\Gamma_N(z+1)$ (car $\Re(z+1)>-N$), soit $z\Gamma(z)=\Gamma(z+1)$. $\square$

## Preuve à trous

*Équation fonctionnelle.* Pour $\Re(z)=x>0$, on intègre par parties sur $[\eps,A]$ :
<trou indice="dériver t^z, intégrer e^{−t}">$\int_\eps^Ae^{-t}t^z\,dt=\big[-e^{-t}t^z\big]_\eps^A+z\int_\eps^Ae^{-t}t^{z-1}dt$</trou>, et les termes de bord tendent vers $0$ car <trou>$|e^{-A}A^z|=e^{-A}A^x\to0$ et $|e^{-\eps}\eps^z|\le\eps^x\to0$ (grâce à $x>0$)</trou>. D'où $\Gamma(z+1)=z\Gamma(z)$, et $\Gamma(n+1)=n!$ avec $\Gamma(1)=1$.

*Prolongement.* Sur $\{\Re(z)>-N\}\setminus\{0,\dots,-(N-1)\}$ on pose <trou indice="itérer Γ(z) = Γ(z+1)/z">$\Gamma_N(z)=\dfrac{\Gamma(z+N)}{z(z+1)\cdots(z+N-1)}$</trou> ; elle coïncide avec $\Gamma$ si $\Re(z)>0$ et $\Gamma_{N+1}=\Gamma_N$ là où les deux sont définies. Près de $-m$, avec $N=m+1$, $\Gamma(z)=\frac{1}{z+m}\cdot\frac{\Gamma(z+m+1)}{z\cdots(z+m-1)}$ et le second facteur vaut <trou indice="évaluer en −m">$\dfrac{\Gamma(1)}{(-m)(-m+1)\cdots(-1)}=\dfrac{(-1)^m}{m!}\ne0$</trou> : pôle simple, de résidu $(-1)^m/m!$. $\square$

## Exemples

* **$\Gamma(\frac12)=\sqrt\pi$ et ses voisins.** Avec $t=u^2$ ($dt=2u\,du$) : $\Gamma(\frac12)=\int_0^\infty e^{-t}t^{-1/2}dt=\int_0^\infty e^{-u^2}u^{-1}\,2u\,du=2\int_0^\infty e^{-u^2}du=\sqrt\pi$ (intégrale de Gauss). Puis $\Gamma(\frac32)=\frac12\Gamma(\frac12)=\frac{\sqrt\pi}2$, $\Gamma(-\frac12)=\frac{\Gamma(1/2)}{-1/2}=-2\sqrt\pi$, $\Gamma(-\frac32)=\frac{\Gamma(-1/2)}{-3/2}=\frac43\sqrt\pi$.
* **Résidus.** $\Res_0(\Gamma)=1$, $\Res_{-1}(\Gamma)=-1$, $\Res_{-2}(\Gamma)=\frac12$, $\Res_{-3}(\Gamma)=-\frac16$. Vérification directe en $-1$ : $\Gamma(z)=\frac{\Gamma(z+2)}{z(z+1)}$, et $(z+1)\Gamma(z)\to\frac{\Gamma(1)}{-1}=-1$.
* **Module sur une droite verticale.** Pour $\Re(z)=x>0$, $|\Gamma(x+iy)|\le\int_0^\infty e^{-t}t^{x-1}dt=\Gamma(x)$ : $\Gamma$ est bornée sur toute bande verticale $\{a\le\Re(z)\le b\}$ avec $0<a$ : pour $x\in[a,b]$, $t^{x-1}\le t^{a-1}$ si $t\le1$ et $t^{x-1}\le t^{b-1}$ si $t\ge1$, donc $|\Gamma(z)|\le\int_0^\infty e^{-t}(t^{a-1}+t^{b-1})\,dt=\Gamma(a)+\Gamma(b)$. Et $|\Gamma|$ décroît même très vite le long des droites verticales : par exemple, la formule des compléments $\Gamma(z)\Gamma(1-z)=\frac{\pi}{\sin(\pi z)}$ (voir [[ch03-gamma-produit-weierstrass]]) et $\Gamma(\bar z)=\overline{\Gamma(z)}$ donnent $|\Gamma(\frac12+iy)|^2=\frac{\pi}{\cosh(\pi y)}\to0$.

## Pièges

* > ⚠️ La formule intégrale n'est valable **que** pour $\Re(z)>0$. Pour $\Re(z)\le0$, « $\Gamma(z)=\int_0^\infty e^{-t}t^{z-1}dt$ » est faux (l'intégrale diverge) : on utilise $\Gamma(z)=\Gamma(z+N)/(z(z+1)\cdots(z+N-1))$.
* Les pôles sont en $0,-1,-2,\dots$ (**y compris $0$**), et non aux entiers positifs : $\Gamma(1)=\Gamma(2)=1$, $\Gamma(3)=2$.
* Ne pas oublier le signe du résidu : $\Res_{-m}(\Gamma)=(-1)^m/m!$ alterne.
* $\Gamma$ ne s'annule jamais (on le voit avec le produit de Weierstraß, [[ch03-gamma-produit-weierstrass]] : $1/\Gamma$ est entière) ; ce n'est pas évident sur la formule intégrale pour $z$ complexe.
* $t^{z-1}$ désigne $e^{(z-1)\ln t}$ avec le logarithme **réel** de $t>0$ : aucune question de détermination ici.

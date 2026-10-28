---
id: ch02-principe-argument
type: lemma
chapter: 2
title: Principe de l'argument (Cauchy, 1826)
ref: Lemme II.8.1
page: 53
importance: 3
depends: [ch02-formule-residus, ch02-laurent-developpement, ch02-meromorphes-corps, ch02-support-fini-remarque, ch01-def-multiplicite-zero, ch02-pole-meromorphe-def]
tags: [principe-argument, zeros, poles, derivee-logarithmique, indice, residus]
---
## Intuition

> 💡 La **dérivée logarithmique** $g'/g$ transforme chaque zéro de $g$ en un pôle simple de résidu $+$(multiplicité), et chaque pôle de $g$ en un pôle simple de résidu $-$(multiplicité). En intégrant $g'/g$ sur un lacet, la formule des résidus **compte** donc les zéros moins les pôles entourés par le lacet, chacun pondéré par le nombre de tours.

Pourquoi « argument » ? Formellement $g'/g=(\log g)'$, et $\frac1{2i\pi}\int_\gamma\frac{g'}{g}$ mesure la variation de $\frac1{2\pi}\arg g$ le long de $\gamma$ : c'est le **nombre de tours que fait le lacet image $g\circ\gamma$ autour de $0$** (voir les exemples). Un zéro simple entouré une fois fait tourner $g(\gamma(t))$ une fois autour de $0$ ; un pôle le fait tourner une fois dans l'autre sens.

Rappels : $\mathcal M(\Omega)$ est l'ensemble des fonctions méromorphes sur $\Omega$, $\mathcal Z(g,\Omega)$ et $\mathcal P(g,\Omega)$ les ensembles de ses zéros et de ses pôles ([[ch02-pole-meromorphe-def]]) ; la **multiplicité** $m(s)$ d'un zéro est l'entier $m\ge1$ tel que $g(z)=(z-s)^mh(z)$ avec $h(s)\neq0$ ([[ch01-def-multiplicite-zero]]), celle d'un pôle l'entier $m\ge1$ tel que $g(z)=(z-s)^{-m}h(z)$ avec $h(s)\neq0$ ; $\Ind_s(\gamma)$ est l'indice de $\gamma$ en $s$ ([[ch02-indice-def]]).

## Énoncé

**Lemme (poly, Lemme II.8.1, p. 53).** Soit $\Omega$ un ouvert simplement connexe, soit $g$ une fonction méromorphe sur $\Omega$, non identiquement nulle, et soit $\gamma$ un lacet dans $\Omega$ dont l'image ne contient ni pôle ni zéro de $g$. Alors
$$
\frac1{2i\pi}\int_\gamma\frac{g'(z)}{g(z)}\,dz=\sum_{s\in\mathcal Z(g,\Omega)}\Ind_s(\gamma)\,m(s)-\sum_{s\in\mathcal P(g,\Omega)}\Ind_s(\gamma)\,m(s),
$$
où $m(s)$ désigne la multiplicité de $s$ comme zéro ou pôle de $g$. Comme pour la formule des résidus, les deux sommes sont à support fini (Remarque II.5.2).

## Hypothèses

### H1 — $\Omega$ simplement connexe

**Rôle.** C'est l'hypothèse de la formule des résidus ([[ch02-formule-residus]]) appliquée à $g'/g$ ; elle assure aussi que $\Omega$ est **connexe**, ce qui sert (avec H2) à garantir que les zéros de $g$ sont isolés.

**Si on la retire.** $\Omega=\C\setminus\{0\}$ (connexe, non simplement connexe), $g(z)=z$ : $g$ n'a ni zéro ni pôle dans $\Omega$, donc le membre de droite est nul, mais pour $\gamma=C(0,1)$, $\frac1{2i\pi}\int_\gamma\frac{dz}{z}=1$. La conclusion reste vraie si l'on suppose seulement $\gamma$ homotope à un lacet constant dans $\Omega$ ([[ch02-residus-hypothese-homotope-remarque]]).

### H2 — $g$ non identiquement nulle

**Rôle.** Sur l'ouvert connexe $\Omega$, $\mathcal M(\Omega)$ est un corps ([[ch02-meromorphes-corps]]) : $1/g$, donc $g'/g$, est méromorphe, et en tout point $z_0$ le développement de Laurent de $g$ a un premier coefficient non nul, ce qui donne la factorisation $g=(z-z_0)^Ng_1$.

**Si on la retire.** Pour $g\equiv0$, $g'/g$ n'est défini nulle part ; l'énoncé n'a pas de sens (et tout point serait un zéro de multiplicité infinie).

### H3 — L'image de $\gamma$ ne contient ni zéro ni pôle de $g$

**Rôle.** Les pôles de $g'/g$ sont exactement les zéros et pôles de $g$ ; il faut que $\gamma$ les évite pour que $\int_\gamma g'/g$ soit définie et que la formule des résidus s'applique.

**Si on la retire.** $g(z)=z-1$, $\gamma(t)=e^{it}$ : $\frac{g'}{g}(\gamma(t))\gamma'(t)=\frac{ie^{it}}{e^{it}-1}\sim\frac1t$ en $0^+$, l'intégrale diverge.

### H4 — $g$ méromorphe sur $\Omega$

**Rôle.** Au voisinage de chaque point, $g=(z-z_0)^Ng_1$ avec $N\in\Z$ **fini** et $g_1$ holomorphe ne s'annulant pas : c'est ce qui fait de chaque singularité de $g'/g$ un pôle **simple** de résidu entier $N$.

**Si on la retire.** $g(z)=z\,e^{1/z}$ sur $\Omega=\C$ : holomorphe sur $\C\setminus\{0\}$ et sans zéro, mais $0$ est une singularité essentielle, pas un pôle : pour $x\in\,]0,1[$ réel, $|x^m g(x)|=x^{m+1}e^{1/x}\to+\infty$ quand $x\to0^+$, pour tout $m\in\N$, donc la condition (ii) de la définition des pôles n'est jamais satisfaite. Le membre de droite est nul, alors que $\frac{g'}{g}=\frac1z-\frac1{z^2}$ et $\frac1{2i\pi}\int_{C(0,1)}\frac{g'}{g}dz=1$.

## Idée de la preuve

En chaque point $z_0$, $g=(z-z_0)^Ng_1$ avec $g_1(z_0)\neq0$, donc $\frac{g'}{g}=\frac{N}{z-z_0}+\frac{g_1'}{g_1}$ : $g'/g$ est méromorphe, à pôles simples exactement aux zéros ($N=m(z_0)$) et aux pôles ($N=-m(z_0)$) de $g$, de résidu $N$. On applique la formule des résidus à $g'/g$.

## Preuve

*Factorisation locale.* $\Omega$ est simplement connexe, donc connexe, et $g\not\equiv0$ ; par [[ch02-meromorphes-corps]], $1/g\in\mathcal M(\Omega)$, si bien que les zéros de $g$ (pôles de $1/g$) forment une partie localement finie de $\Omega$ et que $g$ n'est identiquement nulle sur aucun disque. Soit $z_0\in\Omega$. Par [[ch02-laurent-developpement]], $g(z)=\sum_{n\ge-m}a_n(z-z_0)^n$ sur un disque épointé $D(z_0,r)\setminus\{z_0\}$ ; les $a_n$ ne sont pas tous nuls ; soit $N:=\min\{n;\ a_n\neq0\}\in\Z$. Alors
$$
g(z)=(z-z_0)^N g_1(z),\qquad g_1(z):=\sum_{n\ge0}a_{n+N}(z-z_0)^n,
$$
où $g_1$ est une série entière convergente sur $D(z_0,r)$, donc holomorphe, avec $g_1(z_0)=a_N\neq0$ ; quitte à diminuer $r$, $g_1$ ne s'annule pas sur $D(z_0,r)$. Si $N>0$, $z_0$ est un zéro de multiplicité $m(z_0)=N$ ; si $N<0$, c'est un pôle de multiplicité $m(z_0)=-N$ (dernière assertion de la Proposition II.4.6) ; si $N=0$, $g$ (prolongée) est holomorphe et non nulle en $z_0$.

*Dérivée logarithmique.* Sur $D(z_0,r)\setminus\{z_0\}$, $g'(z)=N(z-z_0)^{N-1}g_1(z)+(z-z_0)^Ng_1'(z)$, d'où
$$
\frac{g'(z)}{g(z)}=\frac{N}{z-z_0}+\frac{g_1'(z)}{g_1(z)},
$$
formule valable pour $N>0$, $N=0$ et $N<0$, où $g_1'/g_1$ est holomorphe sur $D(z_0,r)$. Par conséquent $g'/g$ est holomorphe hors de $\mathcal Z(g,\Omega)\cup\mathcal P(g,\Omega)$ (partie localement finie, comme réunion de deux parties localement finies), et en un point $s$ de cette réunion $g'/g$ a un **pôle simple** de résidu $N$ :
$$
\Res_s\Big(\frac{g'}{g}\Big)=m(s)\ \text{ si } s\in\mathcal Z(g,\Omega),\qquad \Res_s\Big(\frac{g'}{g}\Big)=-m(s)\ \text{ si } s\in\mathcal P(g,\Omega).
$$
Ainsi $g'/g\in\mathcal M(\Omega)$ et $\mathcal P(g'/g,\Omega)=\mathcal Z(g,\Omega)\cup\mathcal P(g,\Omega)$.

*Formule des résidus.* $\gamma$ est un lacet de $\Omega\setminus\mathcal P(g'/g,\Omega)$ par H3, et $\Omega$ est simplement connexe. Le Théorème II.5.1 ([[ch02-formule-residus]]) donne
$$
\frac1{2i\pi}\int_\gamma\frac{g'(z)}{g(z)}dz=\sum_{s\in\mathcal P(g'/g,\Omega)}\Res_s\Big(\frac{g'}{g}\Big)\Ind_s(\gamma)=\sum_{s\in\mathcal Z(g,\Omega)}m(s)\Ind_s(\gamma)-\sum_{s\in\mathcal P(g,\Omega)}m(s)\Ind_s(\gamma),
$$
les sommes étant à support fini d'après la Remarque II.5.2 ([[ch02-support-fini-remarque]]) appliquée à $g'/g$. $\square$

## Preuve à trous

En tout $z_0\in\Omega$, le développement de Laurent de $g\not\equiv0$ (sur $\Omega$ connexe) permet d'écrire <trou indice="factoriser la plus petite puissance">$g(z)=(z-z_0)^Ng_1(z)$ avec $N\in\Z$, $g_1$ holomorphe et $g_1(z_0)\neq0$</trou>, avec $N=m(z_0)$ si $z_0$ est un zéro, $N=-m(z_0)$ si c'est un pôle, $N=0$ sinon. On en déduit <trou indice="dériver le produit et diviser">$\dfrac{g'}{g}=\dfrac{N}{z-z_0}+\dfrac{g_1'}{g_1}$, avec $g_1'/g_1$ holomorphe près de $z_0$</trou>. Donc $g'/g$ est méromorphe, ses pôles sont <trou>exactement les zéros et les pôles de $g$, tous simples, de résidu $+m(s)$ en un zéro et $-m(s)$ en un pôle</trou>. On conclut par <trou indice="Théorème II.5.1">la formule des résidus appliquée à $g'/g$ sur $\Omega$ simplement connexe</trou>. $\square$

## Exemples

* **Monômes et multiplicité.** $g(z)=z^n$ ($n\in\Z$), $\gamma=C(0,1)$ : $\frac{g'}{g}=\frac nz$ et $\frac1{2i\pi}\int_\gamma\frac{g'}{g}=n$. Pour $n=2$ on trouve $2$ et non $1$ : le zéro double compte deux fois. Pour $g(z)=\dfrac{(z-\frac12)^2}{(z+\frac12)^3}$ et le même $\gamma$ : $\frac{g'}{g}=\frac2{z-\frac12}-\frac3{z+\frac12}$, d'où $2-3=-1$.
* **Lacet qui tourne deux fois.** $g(z)=z^2+1$, $\gamma(t)=2e^{2it}$, $t\in[0,2\pi]$ : $\Ind_{\pm i}(\gamma)=2$, donc $\frac1{2i\pi}\int_\gamma\frac{2z}{z^2+1}dz=2\cdot1+2\cdot1=4$.
* **Pourquoi « argument ».** Pour $g$ holomorphe au voisinage de l'image de $\gamma$, sans zéro dessus, le lacet image $g\circ\gamma$ est un lacet $C^1$ par morceaux de $\C\setminus\{0\}$, et par la règle de dérivation $(g\circ\gamma)'(t)=g'(\gamma(t))\gamma'(t)$ ([[ch01-derivee-f-rond-gamma]]) :
$$
\Ind_0(g\circ\gamma)=\frac1{2i\pi}\int_0^1\frac{(g\circ\gamma)'(t)}{g(\gamma(t))}dt=\frac1{2i\pi}\int_0^1\frac{g'(\gamma(t))}{g(\gamma(t))}\gamma'(t)\,dt=\frac1{2i\pi}\int_\gamma\frac{g'}{g}.
$$
Le principe de l'argument dit donc : *le nombre de tours de $g(\gamma)$ autour de $0$ est égal au nombre (pondéré) de zéros moins de pôles entourés par $\gamma$.* Ex. : $g(z)=z^3$ envoie le cercle unité sur le cercle unité parcouru trois fois.

## Pièges

* > ⚠️ Compter les zéros et pôles **avec multiplicité** et **pondérés par l'indice** ; dans la forme « bord d'un domaine » ([[ch02-principe-argument-domaine]]), l'indice vaut $1$ et l'on obtient $Z-P$.
* Le signe : les pôles comptent **négativement**. Pour $g$ holomorphe, l'intégrale est un entier $\ge0$ (si $\gamma$ est d'indice $\ge0$ partout), et elle compte les zéros.
* Ne pas confondre $\frac1{2i\pi}\int_\gamma\frac{g'}{g}$ avec $\frac1{2i\pi}\int_\gamma g$ : ce n'est pas $g$ que l'on intègre mais sa dérivée logarithmique.
* Seules les singularités de type **pôle** sont autorisées : une singularité essentielle (comme $e^{1/z}$ en $0$) n'entre dans aucune des deux sommes et fausse le décompte.
* Plus généralement, pour $\varphi\in\Hol(\Omega)$, la même preuve (avec [[ch02-residu-pole-simple]] pour les résidus de $\varphi\,g'/g$) donne $\frac1{2i\pi}\int_\gamma\varphi\frac{g'}{g}=\sum_{s\in\mathcal Z(g,\Omega)}\Ind_s(\gamma)m(s)\varphi(s)-\sum_{s\in\mathcal P(g,\Omega)}\Ind_s(\gamma)m(s)\varphi(s)$ : avec $\varphi(z)=z$ et $g$ holomorphe on obtient la somme des zéros entourés, utile pour localiser une racine.

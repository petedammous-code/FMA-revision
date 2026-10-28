---
id: ch02-residus-hypothese-homotope-remarque
type: proposition
chapter: 2
title: Affaiblissement de l'hypothèse « simplement connexe »
ref: Remarque II.5.3
page: 48
importance: 2
depends: [ch02-formule-residus, ch02-invariance-homotopie-integrale, ch02-laurent-developpement, ch02-indice-def, ch01-integrale-primitive, ch02-localement-fini-caracterisations]
tags: [residus, homotopie, simplement-connexe, lacet, indice]
---
## Intuition

> 💡 Dans la formule des résidus ([[ch02-formule-residus]]), on ne se sert **jamais** du fait que *tous* les lacets de $\Omega$ se contractent : on se sert seulement du fait que **le** lacet $\gamma$ sur lequel on intègre se contracte en un point sans sortir de $\Omega$. Peu importe que $\Omega$ ait des trous ailleurs, pourvu que $\gamma$ ne les « entoure » pas.

Image mentale : $\Omega$ est une plaque percée de trous ; $\gamma$ est un élastique posé sur la plaque. Si l'on peut faire rétrécir l'élastique jusqu'à un point en le faisant glisser sur la plaque (il a le droit de passer sur les pôles de $f$, qui sont des points de $\Omega$, mais pas au-dessus des trous, qui ne sont pas dans $\Omega$), alors la formule des résidus est valable pour $\gamma$.

Rappels : une **homotopie de lacets** dans $\Omega$ entre $\gamma_0$ et $\gamma_1$ est une application continue $H:[0,1]^2\to\Omega$ avec $H(0,\cdot)=\gamma_0$, $H(1,\cdot)=\gamma_1$ et $H(s,0)=H(s,1)$ pour tout $s$ ; $\Omega$ est **simplement connexe** s'il est connexe et si tout lacet de $\Omega$ est homotope à un lacet constant ([[ch02-homotopie-simplement-connexe]]). $\mathcal M(\Omega)$ désigne l'ensemble des fonctions **méromorphes** sur $\Omega$ et $\mathcal P(f,\Omega)$ l'ensemble des pôles de $f$ dans $\Omega$ ([[ch02-pole-meromorphe-def]]) ; $\Res_s(f)$ est le **résidu** de $f$ en $s$, coefficient $a_{-1}$ du développement de Laurent ([[ch02-residu-def]]) ; $\Ind_s(\gamma)=\frac1{2i\pi}\int_\gamma\frac{dz}{z-s}$ est l'**indice** de $\gamma$ en $s$ ([[ch02-indice-def]]).

## Énoncé

**Proposition (poly, Remarque II.5.3, p. 48).** La démonstration du Théorème II.5.1 montre que l'hypothèse « $\Omega$ simplement connexe » peut être remplacée par « le lacet $\gamma$ est homotope à un lacet constant ». Autrement dit :

Soit $\Omega$ un ouvert de $\C$ (quelconque), soit $f\in\mathcal M(\Omega)$ et soit $\gamma$ un lacet inclus dans $\Omega\setminus\mathcal P(f,\Omega)$. On suppose que $\gamma$ est homotope **dans $\Omega$** (homotopie de lacets) à un lacet constant. Alors l'ensemble des $s\in\mathcal P(f,\Omega)$ tels que $\Ind_s(\gamma)\neq0$ est fini et
$$
\frac{1}{2i\pi}\int_\gamma f(z)\,dz=\sum_{s\in\mathcal P(f,\Omega)}\Res_s(f)\,\Ind_s(\gamma).
$$

Si $\Omega$ est simplement connexe, tout lacet de $\Omega$ vérifie l'hypothèse : on retrouve exactement le Théorème II.5.1.

## Hypothèses

### H1 — $\gamma$ est homotope à un lacet constant **dans $\Omega$**

**Rôle.** C'est la seule chose que la preuve utilise de la topologie de $\Omega$ : (a) pour montrer que $\Ind_z(\gamma)=0$ hors d'un voisinage compact de l'homotopie (donc que la somme est finie) ; (b) pour appliquer l'invariance par homotopie ([[ch02-invariance-homotopie-integrale]]) à la partie holomorphe $f-\sum_s Q_s$ et obtenir une intégrale nulle.

**Si on la retire.** Dans la couronne $\Omega=\{1<|z|<3\}$, la fonction $f(z)=1/z$ est holomorphe (elle n'a aucun pôle dans $\Omega$), et $\gamma=C(0,2)$ (sens direct) est un lacet de $\Omega$. Le membre de droite est une somme vide, donc nul ; pourtant
$$
\int_\gamma\frac{dz}{z}=\int_0^{2\pi}\frac{2ie^{it}}{2e^{it}}\,dt=2i\pi\neq0 .
$$
Le lacet $\gamma$ n'est pas homotope à un lacet constant dans $\Omega$ (sinon l'invariance par homotopie appliquée à $1/z\in\Hol(\Omega)$ donnerait $0$) : il entoure le trou $\bar D(0,1)$. De même, sur $\Omega=\C\setminus\{0\}$, $f(z)=e^{1/z}$ est holomorphe, sans pôle, et $\int_{C(0,1)}e^{1/z}\,dz=2i\pi$ (le coefficient de $1/z$ dans $e^{1/z}=\sum_{n\ge0}\frac{1}{n!\,z^n}$ vaut $1$, et la série converge normalement sur $C(0,1)$, on intègre terme à terme comme dans [[ch02-residu-integrale-cercle]]).

> ⚠️ L'homotopie doit rester dans $\Omega$, mais elle a le droit de passer sur les pôles de $f$ : on ne demande **pas** une homotopie dans $\Omega\setminus\mathcal P(f,\Omega)$ (sinon l'intégrale serait toujours nulle et il n'y aurait plus de résidus).

### H2 — $\gamma$ évite les pôles de $f$

**Rôle.** Elle assure que $f$ est continue sur l'image $\Gamma$ de $\gamma$, donc que $\int_\gamma f(z)\,dz$ a un sens, et que $\Ind_s(\gamma)$ est défini pour tout pôle $s$.

**Si on la retire.** Pour $f(z)=\frac1{z-1}$ et $\gamma(t)=e^{it}$, $t\in[0,2\pi]$, l'intégrande $\frac{ie^{it}}{e^{it}-1}$ est équivalent à $\frac1t$ quand $t\to0^+$ (car $e^{it}-1\sim it$) : l'intégrale n'est même pas définie. Il faut alors passer par des indentations et des valeurs principales.

### H3 — $f$ est méromorphe sur $\Omega$

**Rôle.** Elle fournit, en chaque pôle $s$, un développement de Laurent avec une **partie principale finie** $Q_s$ ([[ch02-laurent-developpement]]), et le fait que les pôles forment une partie localement finie de $\Omega$ (donc en nombre fini dans tout compact).

**Si on la retire.** $f(z)=\bar z$ est continue sur $\C$ mais pas holomorphe ; elle n'a « aucun pôle » et pourtant, pour $\gamma(t)=e^{it}$, $\int_\gamma\bar z\,dz=\int_0^{2\pi}e^{-it}\,ie^{it}\,dt=2i\pi\neq0$, alors que $\gamma$ est homotope à un lacet constant dans $\C$.

## Idée de la preuve

On relit la preuve de II.5.1 : on se restreint à un voisinage $\Omega'$ (réunion finie de disques) de l'image de l'homotopie, où $f$ n'a qu'un nombre fini de pôles ; on retranche les parties principales $Q_s$ ; ce qui reste est holomorphe sur $\Omega'$ et son intégrale sur $\gamma$ est nulle par **invariance par homotopie** (II.2.1) au lieu du Corollaire II.2.2.

## Preuve

Soit $H:[0,1]^2\to\Omega$ une homotopie de lacets entre $\gamma$ et un lacet constant $c\equiv c_0$.

*Étape 1 : réduction à un nombre fini de pôles.* L'image $K:=H([0,1]^2)$ est compacte (image continue d'un compact) et contenue dans $\Omega$. Pour tout $z\in K$, soit $D_z$ un disque ouvert de centre $z$ avec $\bar D_z\subset\Omega$. Les $D_z$ recouvrent $K$ ; on extrait un sous-recouvrement fini $K\subset\bigcup_{i=1}^m D_{z_i}=:\Omega'$. Alors :

* $H$ est à valeurs dans $K\subset\Omega'$ : $\gamma$ est homotope au lacet constant $c$ **dans $\Omega'$**. (On n'affirme pas que $\Omega'$ est simplement connexe ; on n'en a pas besoin.)
* Si $z\notin\Omega'$, la fonction $w\mapsto\frac1{w-z}$ est holomorphe sur $\Omega'$, donc par invariance par homotopie ([[ch02-invariance-homotopie-integrale]], poly, Théorème II.2.1, p. 37)
$$
\Ind_z(\gamma)=\frac1{2i\pi}\int_\gamma\frac{dw}{w-z}=\frac1{2i\pi}\int_c\frac{dw}{w-z}=0,
$$
la dernière intégrale étant nulle car $c'\equiv0$. Les pôles de $f$ hors de $\Omega'$ ne contribuent donc pas à la somme.
* $\bar{\Omega'}\subset\bigcup_{i=1}^m\bar D_{z_i}$, qui est un compact de $\Omega$. Or $\mathcal P(f,\Omega)$ est localement fini dans $\Omega$, donc ne rencontre un compact de $\Omega$ qu'en un nombre fini de points ([[ch02-localement-fini-caracterisations]]). Ainsi $S:=\mathcal P(f,\Omega)\cap\Omega'$ est fini.

En particulier l'ensemble des pôles $s$ avec $\Ind_s(\gamma)\neq0$ est contenu dans $S$, donc fini, et il suffit de montrer
$$
\frac1{2i\pi}\int_\gamma f(z)\,dz=\sum_{s\in S}\Res_s(f)\,\Ind_s(\gamma).
$$

*Étape 2 : on retranche les parties principales.* Pour $s\in S$, le développement de Laurent ([[ch02-laurent-developpement]]) s'écrit, près de $s$,
$$
f(z)=\sum_{n\ge-N_s}a_n^{(s)}(z-s)^n=Q_s(z)+\sum_{n\ge0}a_n^{(s)}(z-s)^n,\qquad Q_s(z):=\sum_{n=-N_s}^{-1}a_n^{(s)}(z-s)^n .
$$
$Q_s$ est holomorphe sur $\C\setminus\{s\}$. (Quitte à prolonger $f$ en ses fausses singularités, $f$ est holomorphe sur $\Omega\setminus\mathcal P(f,\Omega)$.) La fonction $g:=f-\sum_{s\in S}Q_s$ est holomorphe sur $\Omega'\setminus S$, et au voisinage de chaque $s\in S$ elle vaut $\sum_{n\ge0}a_n^{(s)}(z-s)^n-\sum_{s'\neq s}Q_{s'}(z)$, qui est holomorphe en $s$ : $g$ se prolonge en une fonction de $\Hol(\Omega')$.

*Étape 3 : invariance par homotopie.* Comme $\gamma$ est homotope à $c$ dans $\Omega'$ et $g\in\Hol(\Omega')$, le Théorème II.2.1 donne $\int_\gamma g(z)\,dz=\int_c g(z)\,dz=0$. C'est **ici** que la preuve originale invoquait le Corollaire II.2.2 (donc la simple connexité de $\Omega$) ; seule l'homotopie de $\gamma$ à un lacet constant est utile. D'où
$$
\int_\gamma f(z)\,dz=\sum_{s\in S}\int_\gamma Q_s(z)\,dz .
$$

*Étape 4 : calcul des $\int_\gamma Q_s$.* L'image de $\gamma$ ne contient pas $s$. Pour $n\neq-1$, $z\mapsto(z-s)^n$ admet sur $\C\setminus\{s\}$ la primitive holomorphe $\frac{(z-s)^{n+1}}{n+1}$, donc son intégrale sur le lacet $\gamma$ est nulle ([[ch01-integrale-primitive]]). Il reste le terme $n=-1$ :
$$
\frac1{2i\pi}\int_\gamma Q_s(z)\,dz=a_{-1}^{(s)}\,\frac1{2i\pi}\int_\gamma\frac{dz}{z-s}=\Res_s(f)\,\Ind_s(\gamma).
$$
En sommant sur $s\in S$ et en ajoutant les termes nuls des pôles hors de $\Omega'$, on obtient la formule annoncée. $\square$

## Preuve à trous

Soit $H$ une homotopie de lacets dans $\Omega$ entre $\gamma$ et un lacet constant $c$, et $K=H([0,1]^2)$, compact de $\Omega$. On recouvre $K$ par <trou indice="compacité">un nombre fini de disques $D_{z_i}$ d'adhérences incluses dans $\Omega$, de réunion $\Omega'$</trou>. Alors $\gamma$ est homotope à $c$ dans $\Omega'$, donc pour $z\notin\Omega'$, <trou indice="appliquer II.2.1 à quelle fonction ?">$w\mapsto 1/(w-z)$ est holomorphe sur $\Omega'$ et $\Ind_z(\gamma)=\Ind_z(c)=0$</trou>. De plus $\Omega'$ est d'adhérence compacte dans $\Omega$, donc $S=\mathcal P(f,\Omega)\cap\Omega'$ est fini.

On écrit en chaque $s\in S$ le développement de Laurent $f=Q_s+(\text{partie holomorphe en } s)$. La fonction $g=f-\sum_{s\in S}Q_s$ <trou>se prolonge en une fonction holomorphe sur $\Omega'$</trou>, donc <trou indice="c'est l'endroit où l'on remplace le Corollaire II.2.2">par invariance par homotopie (Théorème II.2.1) dans $\Omega'$, $\int_\gamma g=\int_c g=0$</trou>. Enfin, pour $n\neq-1$, $(z-s)^n$ a une primitive sur $\C\setminus\{s\}$, d'où <trou>$\frac1{2i\pi}\int_\gamma Q_s=a^{(s)}_{-1}\Ind_s(\gamma)=\Res_s(f)\Ind_s(\gamma)$</trou>, et l'on somme. $\square$

## Exemples

* **Une fonction qui n'est méromorphe que sur un ouvert troué.** $\Omega=\C\setminus\{0\}$ (non simplement connexe), $f(z)=\dfrac{e^{1/z}}{z-2}\in\mathcal M(\Omega)$ : un seul pôle, simple, en $2$, de résidu $e^{1/2}$ ([[ch02-residu-pole-simple]]). Soit $\gamma=C(2,1)$ (sens direct). L'homotopie $H(s,t)=(1-s)\gamma(t)+2s$ reste dans le disque convexe $D(2,2)$, qui ne contient pas $0$ : $\gamma$ est homotope à un lacet constant dans $\Omega$. Donc
$$
\int_\gamma\frac{e^{1/z}}{z-2}\,dz=2i\pi\,e^{1/2}\,\Ind_2(\gamma)=2i\pi\sqrt e .
$$
Le Théorème II.5.1 ne s'applique pas tel quel sur $\Omega$ (non simplement connexe), ni sur $\C$ ($f$ n'y est pas méromorphe à cause de $e^{1/z}$) ; la remarque s'applique directement. (On pouvait aussi appliquer II.5.1 sur l'ouvert simplement connexe $D(2,2)$ : c'est le même argument.)
* **Une couronne et deux lacets.** $\Omega=\{1<|z|<5\}$, $f(z)=\dfrac{1}{z(z-3)}$, pôle simple en $3$ de résidu $\frac13$ (le point $0\notin\Omega$). Pour $\gamma_1=C(3,1)$ : homotope à un point dans $D(3,2)\subset\Omega$, donc $\int_{\gamma_1}f=2i\pi\cdot\frac13=\frac{2i\pi}3$. Pour $\gamma_2=C(0,4)$ : **pas** homotope à un point dans $\Omega$, la remarque ne s'applique pas ; et en effet, par la formule des résidus sur $\C$ (où $f$ est méromorphe), $\int_{\gamma_2}f=2i\pi\big(\Res_0f+\Res_3f\big)=2i\pi\big(-\frac13+\frac13\big)=0$, qui n'est pas $2i\pi\cdot\frac13$ : le résidu « caché » en $0$, hors de $\Omega$, compte.
* **Ouvert non connexe.** La remarque ne demande même pas $\Omega$ connexe : pour $\Omega=D(0,1)\cup D(5,1)$ et $\gamma$ un lacet de $D(0,1)$, le disque contenant $\gamma$ fournit l'homotopie vers un lacet constant.

## Pièges

* > ⚠️ « Homotope à un lacet constant **dans $\Omega$** » : tout lacet est homotope à un point dans $\C$ ; ce qui compte, c'est de ne pas traverser $\C\setminus\Omega$ pendant la déformation.
* L'homotopie peut traverser les pôles de $f$ (ce sont des points de $\Omega$) ; c'est le domaine $\Omega$ de **méromorphie** de $f$ qui doit contenir l'homotopie, pas $\Omega\setminus\mathcal P(f,\Omega)$.
* La somme porte sur les pôles de $f$ **dans $\Omega$** : les singularités situées dans les trous de $\Omega$ ne figurent pas dans la formule, et c'est précisément pour cela qu'il faut que $\gamma$ ne les entoure pas (exemple de la couronne).
* Cette remarque justifie que les énoncés II.8.2 et II.8.4 ([[ch02-principe-argument-domaine]], [[ch02-rouche]]) soient posés sur un ouvert $\Omega$ quelconque contenant $\bar U$ : le bord de $U$ s'y contracte (dans les cas usuels) sans quitter $\Omega$.

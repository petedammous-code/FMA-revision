---
id: ch08-cadre-espace-courbes
type: definition
chapter: 8
title: "Cadre : espace de Hilbert $V$, identification $V\simeq L(V;\mathbb R)$, espace de courbes $E=C^1([0;1];V)$ et sous-espace affine $E_{a,b}$"
ref: "non numéroté, section VIII, p. 143"
page: 143
importance: 2
depends: [ch05-gradient-hilbert, ch05-norme-operateur-def]
tags: [calcul-des-variations, hilbert, riesz, espace-de-courbes, norme-c1, extremites-fixees]
---
## Intuition

> 💡 Le calcul des variations fait du calcul différentiel **sur un espace de courbes** : le « point » où l'on dérive est une courbe $\gamma$ tout entière, et une « petite variation » est une courbe $h$ qu'on ajoute à $\gamma$. Pour cela il faut trois ingrédients : un espace $V$ où vivent les positions (et les vitesses), une norme sur les courbes qui mesure à la fois **l'écart des positions et l'écart des vitesses**, et l'ensemble des courbes qui relient deux points fixés $a$ et $b$.

Image mentale : une corde tendue entre deux clous $a$ et $b$. L'ensemble $E_{a,b}$ est l'ensemble de toutes les formes possibles de la corde ; deux formes sont « proches » pour la norme $\norm\cdot_E$ si les cordes sont proches **et** ont des pentes proches en chaque point.

Le produit scalaire de $V$ sert à une seule chose, mais elle est partout dans le chapitre : transformer une **forme linéaire** sur $V$ (par exemple une différentielle partielle $\frac{\partial L}{\partial v}$, [[ch05-differentielles-partielles]]) en un **vecteur** de $V$, exactement comme on définit le gradient ([[ch05-gradient-hilbert]]).

Vocabulaire : un **espace de Hilbert** est un espace vectoriel réel muni d'un produit scalaire $\langle\cdot,\cdot\rangle$ et complet pour la norme associée $\norm x_V=\sqrt{\langle x,x\rangle}$ ; en dimension finie, la complétude est automatique (c'est un espace euclidien). $L(V;\R)$ est l'espace des formes linéaires sur $V$ (toutes continues en dimension finie), normé par la norme d'opérateur $\norm\ell=\sup_{\norm h_V\le1}|\ell(h)|$ ([[ch05-norme-operateur-def]]).

## Énoncé

**Définition (poly, section VIII, p. 143).** Soit $(V,\langle\cdot,\cdot\rangle)$ un espace de Hilbert de dimension finie dont la norme est notée $\norm\cdot_V$.

* **Identification $V\simeq L(V;\R)$.** On identifie systématiquement $V$ et son dual $L(V;\R)$ au moyen du produit scalaire : à une forme linéaire $\ell$ sur $V$ correspond l'unique vecteur $w\in V$ tel que $\ell(h)=\langle w,h\rangle$ pour tout $h\in V$.
* **Espace des courbes.** Soit $E=C^1([0;1];V)$, muni de la norme
$$
\norm\gamma_E=\sup_{t\in[0;1]}\norm{\gamma(t)}_V+\sup_{t\in[0;1]}\norm{\gamma'(t)}_V .
$$
* **Courbes à extrémités fixées.** On fixe $a,b$ dans $V$ et l'on note $E_{a,b}$ le sous-ensemble des $\gamma\in E$ tels que $\gamma(0)=a$, $\gamma(1)=b$ (espace des courbes à extrémités fixées $a$ et $b$ dans $V$).

Ici $C^1([0;1];V)$ désigne l'ensemble des applications $\gamma:[0;1]\to V$ dérivables en tout point de $[0;1]$ (dérivée à droite en $0$, à gauche en $1$) et dont la dérivée $\gamma':[0;1]\to V$ est continue. Le poly dit « sous-espace » pour $E_{a,b}$ ; ce n'est un sous-espace **vectoriel** que si $a=b=0$ : en général c'est un sous-espace **affine**, dirigé par $E_{0,0}$ ([[ch08-eab-complet-affine]]).

## Hypothèses

### H1 — $V$ est un espace de Hilbert de dimension finie

**Rôle.** (i) L'identification $V\simeq L(V;\R)$ est le théorème de représentation de Riesz ; en dimension finie, il se démontre en une ligne : l'application $J:w\mapsto\langle w,\cdot\rangle$ de $V$ dans $L(V;\R)$ est linéaire et injective (si $\langle w,h\rangle=0$ pour tout $h$, on prend $h=w$ : $\norm w_V^2=0$), donc bijective puisque $\dim L(V;\R)=\dim V$. De plus c'est une **isométrie** : $|\langle w,h\rangle|\le\norm w_V\norm h_V$ (Cauchy-Schwarz) avec égalité pour $h=w$, donc $\norm{J(w)}=\norm w_V$. (ii) La dimension finie rend $V$ complet, d'où la complétude de $E$ ([[ch08-eab-complet-affine]]), et rend compactes les boules fermées de $V$, ce qui sert à montrer que l'action $\hat L$ est $C^1$ ([[ch08-lhat-c1-differentielle]]).

**Si on la retire.** Sans produit scalaire (une simple norme sur $V$), il n'y a plus d'identification canonique : il faut garder $\frac{\partial L}{\partial v}$ comme forme linéaire et écrire $\frac{\partial L}{\partial v}(\dots)(h'(t))$ au lieu de $\langle\cdot,h'(t)\rangle$ — tout le chapitre reste vrai sous cette écriture, l'identification n'est qu'une commodité d'écriture. Sans complétude, $E$ n'est plus complet : voir [[ch08-eab-complet-affine]], H1.

### H2 — La norme sur $E$ contrôle aussi la dérivée

**Rôle.** L'action $\hat L(\gamma)=\int_0^1L(t,\gamma(t),\gamma'(t))\,dt$ ([[ch08-lagrangien-fonctionnelle]]) dépend de $\gamma'$ ; pour qu'une petite variation $h$ produise une petite variation de $\hat L$, il faut que $h'$ soit petit. C'est le terme $\sup_t\norm{\gamma'(t)}_V$ qui le garantit.

**Si on la retire.** Avec la seule norme $\norm\gamma_\infty=\sup_t\norm{\gamma(t)}_V$ : (a) $E$ n'est plus complet (une limite uniforme de courbes $C^1$ peut avoir un coin, voir [[ch08-eab-complet-affine]]) ; (b) l'action $\gamma\mapsto\frac12\int_0^1\norm{\gamma'}_V^2$ n'est même plus continue en $0$. Vérification : pour $e\in V$ unitaire et $\gamma_n(t)=\frac1n\sin(n^2t)\,e$, on a $\norm{\gamma_n}_\infty\le\frac1n\to0$, mais $\gamma_n'(t)=n\cos(n^2t)\,e$ et
$$
\frac12\int_0^1\norm{\gamma_n'(t)}_V^2\,dt=\frac{n^2}{2}\int_0^1\cos^2(n^2t)\,dt=\frac{n^2}{2}\Big(\frac12+\frac{\sin(2n^2)}{4n^2}\Big)=\frac{n^2}{4}+\frac{\sin(2n^2)}{8}\xrightarrow[n\to\infty]{}+\infty .
$$

### H3 — Courbes de classe $C^1$ sur le segment fermé $[0;1]$

**Rôle.** La continuité de $\gamma$ et $\gamma'$ sur le **compact** $[0;1]$ garantit que les deux $\sup$ de $\norm\gamma_E$ sont finis, et que $t\mapsto L(t,\gamma(t),\gamma'(t))$ est continue donc intégrable. Les valeurs $\gamma(0)$ et $\gamma(1)$ ont un sens, ce qui permet d'imposer les extrémités.

**Si on la retire.** Sur l'intervalle ouvert $]0;1[$, la courbe $\gamma(t)=\sqrt t\,e$ est $C^1$ mais $\gamma'(t)=\frac{1}{2\sqrt t}e$ n'est pas bornée : $\norm\gamma_E=+\infty$, et même $\frac12\int_0^1\norm{\gamma'}^2=\frac18\int_0^1\frac{dt}{t}=+\infty$.

## Exemples

* **$\norm\cdot_E$ est une norme.** Homogénéité et inégalité triangulaire viennent de celles de $\norm\cdot_V$ et du $\sup$ ; si $\norm\gamma_E=0$, alors $\gamma(t)=0$ pour tout $t$. Pour $V=\R^2$ et $\gamma(t)=(\cos\pi t,\sin\pi t)$ (demi-cercle unité), on a $\norm{\gamma(t)}=1$, $\gamma'(t)=\pi(-\sin\pi t,\cos\pi t)$, $\norm{\gamma'(t)}=\pi$, donc $\norm\gamma_E=1+\pi$, et $\gamma\in E_{a,b}$ avec $a=(1,0)$, $b=(-1,0)$.
* **Identification dans $\R^n$.** Pour $V=\R^n$ muni du produit scalaire usuel, la forme linéaire $\ell(h)=c_1h_1+\dots+c_nh_n$ est identifiée au vecteur $w=(c_1,\dots,c_n)$. Si l'on munit plutôt $\R^n$ du produit scalaire $\langle x,y\rangle_M=x^{\mathsf T}My$ ($M$ symétrique définie positive), la même forme $\ell$ est identifiée à $w=M^{-1}c$ : le vecteur associé **dépend du produit scalaire**, la forme linéaire non.
* **Une différentielle partielle vue comme vecteur.** Pour $L(u,q,v)=\frac12\norm v_V^2$, on a $L(u,q,v+k)=L(u,q,v)+\langle v,k\rangle+\frac12\norm k_V^2$, donc $\frac{\partial L}{\partial v}(u,q,v)=\langle v,\cdot\rangle$, identifiée au vecteur $v$ lui-même.

## Pièges

* > ⚠️ $E_{a,b}$ n'est pas un sous-espace vectoriel dès que $(a,b)\neq(0,0)$ : $0\notin E_{a,b}$, et la somme de deux courbes de $E_{a,b}$ va de $2a$ à $2b$. Les variations admissibles d'une courbe $\gamma\in E_{a,b}$ sont les $\gamma+h$ avec $h\in E_{0,0}$ ($h(0)=h(1)=0$).
* La norme $\norm\cdot_E$ est la norme $C^1$ ; la norme uniforme seule ne suffit pas (H2). Elle est équivalente à $\max\big(\sup\norm\gamma_V,\sup\norm{\gamma'}_V\big)$, ce qui ne change rien aux notions de différentiabilité ([[ch05-differentielle-normes-equivalentes]]).
* Dans tout le chapitre, $t$ est la variable des courbes ; les lettres $u,q,v$ sont réservées aux variables du Lagrangien ([[ch08-lagrangien-fonctionnelle]]).
* Le vecteur associé à une forme linéaire dépend du produit scalaire choisi (deuxième exemple) ; une équation écrite entre formes linéaires, elle, n'en dépend pas.
* Une courbe $C^1$ sur $[0;1]$ (dérivées unilatérales aux bords) se prolonge en une fonction $C^1$ sur $\R$ : poser $\gamma(t)=\gamma(0)+t\gamma'(0)$ pour $t\le0$ et $\gamma(t)=\gamma(1)+(t-1)\gamma'(1)$ pour $t\ge1$. Les deux définitions possibles de « $C^1$ sur un segment » coïncident donc.

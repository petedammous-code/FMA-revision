---
id: rfx-edo-application-sous-varietes
type: reflexe
situation: Montrer qu'une application entre sous-variétés est de classe C^k, calculer sa différentielle, montrer que c'est une immersion, une submersion ou un difféomorphisme (local)
chapters: [9, 6, 5, 1]
---
## Situation

On a une application $\varphi:S_1\to S_2$ entre sous-variétés (sphère, cercle, tore, groupe de matrices $\mathrm{SO}(n)$, graphe) : restriction d'une formule ($x\mapsto Ax$, $x\mapsto x/\norm x$, $z\mapsto z^n$, $A\mapsto A^{-1}$, $A\mapsto{}^tA$), projection, application lue dans des coordonnées, ou flot $F_t$. L'énoncé demande : « montrer que $\varphi$ est $C^\infty$ », « calculer $d\varphi_p$ », « montrer que $\varphi$ est un difféomorphisme local », « est-ce un difféomorphisme ? », « montrer que $\varphi$ est une submersion », « déterminer les points critiques de $\varphi$ ».

## Options

### [x] Restriction d'une application ambiante — [[ch09-remarques-differentielle-cas-euclidien]]
**Quand.** $\varphi$ est la restriction à $S_1$ d'une application $\Phi$ de classe $C^k$ définie sur un **ouvert** $V\supset S_1$ de $\R^{N_1}$, et $\Phi(S_1)\subset S_2$. Alors $\varphi:S_1\to S_2$ est $C^k$ ([[ch09-remarques-applications-cr]], point 2) et $d\varphi_p=d\Phi_{p\,|T_pS_1}$, à valeurs dans $T_{\varphi(p)}S_2$ (poly, Remarques IX.7.16, p. 163). C'est le cas de **presque toutes** les applications d'énoncé.
**Justification.** Dans des paramétrages, $x_2^{-1}\circ\Phi\circ x_1$ est composée d'applications $C^k$ (la carte $x_2^{-1}$ est $C^k$ sur $S_2$, [[ch09-ex-parametrages-cartes-cr]]).
**Pièges.** Vérifier **les deux** points : $\Phi$ définie et $C^k$ sur un ouvert contenant $S_1$ (pour $x/\norm x$ : $\R^N\setminus\{0\}$), et $\Phi(S_1)\subset S_2$ (sinon $\varphi$ ne va pas dans $S_2$). Pour $\varphi(z)=z^2$ sur le cercle : $d\Phi_z$ est la multiplication complexe par $\Phi'(z)=2z$ (une application holomorphe est $\R$-différentiable de différentielle $h\mapsto f'(z)h$).

### [x] Lecture dans des paramétrages ou des cartes — [[ch09-application-cr-entre-sous-varietes-def]]
**Quand.** $\varphi$ est donnée en coordonnées (angles, coordonnées sphériques), ou n'est pas visiblement la restriction d'une formule ambiante. On vérifie que $x_2^{-1}\circ\varphi\circ x_1$ est $C^k$ pour **un** couple de paramétrages au voisinage de chaque point (poly, Définition IX.7.5, p. 160, et Remarques IX.7.7, p. 160).
**Justification.** Le changement de paramétrage est un difféomorphisme ([[ch09-changement-parametrage]]) : un couple suffit.
**Pièges.** Couvrir **tous** les points (un paramétrage par angles oublie souvent des points) ; vérifier d'abord la **continuité** de $\varphi$ (la définition la suppose).

### [x] Différentielle par les courbes — [[ch09-differentielle-entre-sous-varietes-def]]
**Quand.** On veut **calculer** $d\varphi_p(v)$ : choisir une courbe $\alpha$ tracée sur $S_1$ avec $\alpha(0)=p$, $\alpha'(0)=v$ (sur la sphère : $\alpha(t)=\cos t\,p+\sin t\,v$ pour $v\perp p$ unitaire ; sur un groupe de matrices $G$ : $\alpha(t)=A\,e^{tH}$ avec $e^{tH}\in G$, de vitesse $\alpha'(0)=AH$), et dériver : $d\varphi_p(v)=(\varphi\circ\alpha)'(0)$ (poly, Définition IX.7.15, p. 163). La composition se fait comme d'habitude ([[ch09-composition-differentielles]]).
**Justification.** C'est une des deux caractérisations de $d\varphi_p$ ; le résultat ne dépend pas de la courbe choisie.
**Pièges.** La courbe doit rester **dans $S_1$** (une droite $p+tv$ sort de la sphère) ; si $\varphi$ est une restriction, il est plus simple de restreindre $d\Phi_p$.

### [x] Inversion locale sur les sous-variétés — [[ch09-inversion-locale-sous-varietes]]
**Quand.** $\varphi$ est $C^k$ et $d\varphi_p:T_pS_1\to T_{\varphi(p)}S_2$ est un **isomorphisme** : en pratique, $\dim S_1=\dim S_2$ et $d\varphi_p$ injective (noyau nul). Alors $\varphi$ est un $C^k$-difféomorphisme d'un voisinage ouvert de $p$ dans $S_1$ sur un voisinage ouvert de $\varphi(p)$ dans $S_2$ (poly, Théorème IX.7.26, p. 166). Pour un **difféomorphisme global** : $\varphi$ bijective et difféomorphisme local en tout point (l'inverse coïncide localement avec les inverses locaux, donc est $C^k$).
**Justification.** Inversion locale ([[ch06-inversion-locale]]) appliquée à $x_2^{-1}\circ\varphi\circ x_1$ entre ouverts de $\R^m$.
**Pièges.** Différentielle iso partout **ne donne pas** l'injectivité globale ($z\mapsto z^2$ sur le cercle). Si les dimensions diffèrent, ce n'est jamais un difféomorphisme ([[ch09-differentielle-diffeomorphisme-isomorphisme]]) ; on parle alors d'immersion ou de submersion ([[ch09-immersion-submersion-sous-varietes-def]]), dont les fibres et images locales sont des sous-variétés ([[ch09-fibres-submersion-image-immersion]]).

### [ ] Inversion locale dans l'espace ambiant — [[ch06-inversion-locale]]
**Pourquoi ce n'est pas l'outil ici.** Sur $S_1\subset\R^{N_1}$, la différentielle pertinente est $d\varphi_p$ sur $T_pS_1$ : la jacobienne $d\Phi_p$ de l'extension ambiante peut être non inversible (ou même non carrée) alors que $\varphi$ est un difféomorphisme local de $S_1$ sur $S_2$, et réciproquement $d\Phi_p$ inversible donne seulement que $d\varphi_p=d\Phi_{p\,|T_pS_1}$ est **injective** : il faut encore $\dim S_1=\dim S_2$ pour en faire un isomorphisme, et c'est alors le Théorème IX.7.26 (sur les sous-variétés) qu'on applique, pas l'inversion locale de $\R^{N_1}$ (dont la conclusion porte sur un voisinage de $p$ dans $\R^{N_1}$, pas sur $S_1\to S_2$).
**Quand il le serait.** Quand $S_1$ et $S_2$ sont des **ouverts** de $\R^n$, ou pour démontrer le théorème IX.7.26 à travers des paramétrages. Pour un difféomorphisme $\Phi$ de $\R^N$ tout entier, $\Phi(S)$ est une sous-variété ([[ch09-ex-image-diffeomorphisme]]).

## Démarche

1. **Régularité** : si $\varphi$ est la restriction d'une formule $\Phi$ régulière sur un ouvert contenant $S_1$, alors vérifier $\Phi(S_1)\subset S_2$ et conclure ; sinon passer en paramétrages.
2. **Espaces tangents** : écrire $T_pS_1$ et $T_{\varphi(p)}S_2$ ([[rfx-edo-sous-variete-tangent]]).
3. **Différentielle** : $d\Phi_p$ restreinte à $T_pS_1$, ou dérivée le long d'une courbe ; contrôler que l'image est dans $T_{\varphi(p)}S_2$.
4. Si l'on demande difféomorphisme local, alors comparer les dimensions et calculer le noyau de $d\varphi_p$ ; noyau nul et dimensions égales : inversion locale IX.7.26.
5. Si l'on demande difféomorphisme global, alors ajouter la bijectivité (inverse explicite si possible, sinon injectivité + surjectivité) ; si $\varphi$ est un flot $F_t$, l'inverse est $F_{-t}$.
6. Si l'on demande points critiques, alors chercher où $d\varphi_p$ n'est pas surjective ; pour $f:S\to\R$, où $df_p=0$ sur $T_pS$ ([[rfx-edo-extrema-sous-variete]]).

## Pièges

* Oublier de vérifier que $\varphi$ prend ses valeurs dans $S_2$.
* Calculer $d\Phi_p$ sur tout $\R^{N_1}$ et conclure sur l'inversibilité de cette matrice.
* Confondre difféomorphisme local et global (penser au revêtement $z\mapsto z^n$).
* Prendre une courbe qui sort de $S_1$ pour calculer $d\varphi_p$.
* Dire « difféomorphisme » sans vérifier que l'inverse est $C^k$ (une bijection $C^k$ peut avoir un inverse non dérivable : $t\mapsto t^3$).

## Mini-exemple

*Énoncé.* Soit $\mathbb S^1=\{z\in\C : \abs z=1\}\subset\C=\R^2$ et $\varphi(z)=z^2$. Montrer que $\varphi:\mathbb S^1\to\mathbb S^1$ est $C^\infty$, est un difféomorphisme local en tout point, mais n'est pas un difféomorphisme.

*Solution.* $\Phi(w)=w^2$, soit $(x,y)\mapsto(x^2-y^2,2xy)$, est $C^\infty$ sur $\R^2$ et $\abs{z^2}=1$ si $\abs z=1$ : $\varphi$ est $C^\infty$ de $\mathbb S^1$ dans $\mathbb S^1$. $\mathbb S^1=\{\abs w^2=1\}$ et $d(\abs w^2)_z(h)=2\Re(\bar zh)$, d'où $T_z\mathbb S^1=iz\R$. Comme $\Phi$ est holomorphe, $d\Phi_z(h)=2zh$ ; donc $d\varphi_z(iz)=2iz^2\ne0$, qui appartient bien à $T_{z^2}\mathbb S^1=iz^2\R$. Les deux espaces tangents sont de dimension $1$ et $d\varphi_z$ est injective : c'est un isomorphisme, et $\varphi$ est un difféomorphisme local en tout point (Théorème IX.7.26). Mais $\varphi(-z)=\varphi(z)$ : $\varphi$ n'est pas injective, donc pas un difféomorphisme.
